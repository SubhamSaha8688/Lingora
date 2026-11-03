import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SUPPORTED_LANGUAGES as DEFAULT_LANGUAGES,
  CURRICULUM as DEFAULT_CURRICULUM,
  STUDY_MATERIALS as DEFAULT_MATERIALS,
} from '../data/curriculum.js';

const CurriculumContext = createContext(null);

const DEFAULT_PAYMENT_CONFIG = {
  gatewayMode: 'razorpay', // 'razorpay' | 'stripe' | 'test'
  razorpayKeyId: 'rzp_test_placeholder',
  stripePublishableKey: '',
  inrMonthlyPrice: 199,
  inrYearlyPrice: 1499,
  usdMonthlyPrice: 4.99,
  usdYearlyPrice: 39.99,
};

export const CURRICULUM_VERSION = '2026.11.03.v5_jlpt_mastery';

export function CurriculumProvider({ children }) {
  // Clear stale local cache if version is outdated
  useEffect(() => {
    try {
      const v = localStorage.getItem('lingora_curriculum_version');
      if (v !== CURRICULUM_VERSION) {
        localStorage.setItem('lingora_curriculum_version', CURRICULUM_VERSION);
        localStorage.removeItem('lingora_dynamic_curriculum');
        localStorage.removeItem('lingora_dynamic_languages');
        setCurriculum(DEFAULT_CURRICULUM);
        setLanguages(DEFAULT_LANGUAGES);
      }
    } catch (_) {}
  }, []);

  // 1. Languages
  const [languages, setLanguages] = useState(() => {
    try {
      const v = localStorage.getItem('lingora_curriculum_version');
      if (v === CURRICULUM_VERSION) {
        const saved = localStorage.getItem('lingora_dynamic_languages');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      }
    } catch (_) {}
    return DEFAULT_LANGUAGES;
  });

  // 2. Curriculum
  const [curriculum, setCurriculum] = useState(() => {
    try {
      const v = localStorage.getItem('lingora_curriculum_version');
      if (v !== CURRICULUM_VERSION) {
        localStorage.setItem('lingora_curriculum_version', CURRICULUM_VERSION);
        localStorage.removeItem('lingora_dynamic_curriculum');
        return DEFAULT_CURRICULUM;
      }
      const saved = localStorage.getItem('lingora_dynamic_curriculum');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          const merged = { ...DEFAULT_CURRICULUM };
          Object.keys(parsed).forEach((k) => {
            if (!merged[k]) {
              merged[k] = parsed[k];
            } else if (Array.isArray(parsed[k])) {
              const existingIds = new Set(merged[k].map((l) => l.id));
              const extraLessons = parsed[k].filter((l) => !existingIds.has(l.id) && l.isCustom);
              merged[k] = [...merged[k], ...extraLessons];
            }
          });
          return merged;
        }
      }
    } catch (_) {}
    return DEFAULT_CURRICULUM;
  });

  // 3. Study Materials
  const [studyMaterials, setStudyMaterials] = useState(() => {
    try {
      const saved = localStorage.getItem('lingora_dynamic_materials');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (_) {}
    return DEFAULT_MATERIALS;
  });

  // 4. Payment Gateway Settings
  const [paymentConfig, setPaymentConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('lingora_payment_config');
      if (saved) {
        return { ...DEFAULT_PAYMENT_CONFIG, ...JSON.parse(saved) };
      }
    } catch (_) {}
    return DEFAULT_PAYMENT_CONFIG;
  });

  // Persist to local storage
  useEffect(() => {
    try {
      localStorage.setItem('lingora_dynamic_languages', JSON.stringify(languages));
    } catch (e) {
      console.warn('Failed saving dynamic languages:', e);
    }
  }, [languages]);

  useEffect(() => {
    try {
      localStorage.setItem('lingora_dynamic_curriculum', JSON.stringify(curriculum));
    } catch (e) {
      console.warn('Failed saving dynamic curriculum:', e);
    }
  }, [curriculum]);

  useEffect(() => {
    try {
      localStorage.setItem('lingora_dynamic_materials', JSON.stringify(studyMaterials));
    } catch (e) {
      console.warn('Failed saving dynamic materials:', e);
    }
  }, [studyMaterials]);

  useEffect(() => {
    try {
      localStorage.setItem('lingora_payment_config', JSON.stringify(paymentConfig));
    } catch (e) {
      console.warn('Failed saving payment config:', e);
    }
  }, [paymentConfig]);

  // Load from backend on start if available
  useEffect(() => {
    async function fetchRemoteCurriculum() {
      try {
        const res = await fetch('/api/curriculum');
        if (res.ok) {
          const remote = await res.json();
          if (remote.languages?.length) setLanguages(remote.languages);
          if (remote.curriculum && typeof remote.curriculum === 'object') {
            setCurriculum((prev) => {
              const next = { ...prev };
              Object.keys(remote.curriculum).forEach((lang) => {
                const defaultList = DEFAULT_CURRICULUM[lang] || [];
                const defaultIds = new Set(defaultList.map((l) => l.id));
                const remoteList = Array.isArray(remote.curriculum[lang]) ? remote.curriculum[lang] : [];
                // Only merge lessons that are custom created by admin
                const customLessons = remoteList.filter((l) => !defaultIds.has(l.id) && l.isCustom);
                next[lang] = [...defaultList, ...customLessons];
              });
              return next;
            });
          }
          if (remote.studyMaterials?.length) setStudyMaterials(remote.studyMaterials);
          if (remote.paymentConfig) setPaymentConfig((prev) => ({ ...prev, ...remote.paymentConfig }));
        }
      } catch (_) {
        // Runs cleanly offline with local storage
      }
    }
    fetchRemoteCurriculum();
  }, []);

  // Action: Add new Language / Course
  const addLanguage = (newLang) => {
    setLanguages((prev) => {
      const exists = prev.some((l) => l.id === newLang.id);
      if (exists) {
        return prev.map((l) => (l.id === newLang.id ? { ...l, ...newLang } : l));
      }
      return [...prev, newLang];
    });

    // Initialize empty curriculum if not present
    setCurriculum((prev) => {
      if (!prev[newLang.id]) {
        return { ...prev, [newLang.id]: [] };
      }
      return prev;
    });
  };

  // Action: Add / Update Lesson
  const addLesson = (languageId, lessonObj) => {
    setCurriculum((prev) => {
      const langLessons = prev[languageId] ? [...prev[languageId]] : [];
      const idx = langLessons.findIndex((l) => l.id === lessonObj.id);
      if (idx >= 0) {
        langLessons[idx] = lessonObj;
      } else {
        langLessons.push(lessonObj);
      }
      return { ...prev, [languageId]: langLessons };
    });
  };

  // Action: Delete Lesson
  const deleteLesson = (languageId, lessonId) => {
    setCurriculum((prev) => {
      if (!prev[languageId]) return prev;
      return {
        ...prev,
        [languageId]: prev[languageId].filter((l) => l.id !== lessonId),
      };
    });
  };

  // Action: Add / Update Study Material
  const addStudyMaterial = (materialObj) => {
    setStudyMaterials((prev) => {
      const idx = prev.findIndex((m) => m.id === materialObj.id);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = materialObj;
        return updated;
      }
      return [materialObj, ...prev];
    });
  };

  // Action: Update Payment Gateway Settings
  const updatePaymentConfig = (newConfig) => {
    setPaymentConfig((prev) => ({ ...prev, ...newConfig }));
  };

  // Action: Export entire curriculum data as JSON
  const exportCurriculumData = () => {
    return JSON.stringify(
      {
        languages,
        curriculum,
        studyMaterials,
        paymentConfig,
        exportedAt: new Date().toISOString(),
      },
      null,
      2
    );
  };

  // Action: Import and restore curriculum data from JSON
  const importCurriculumData = (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      if (data.languages && Array.isArray(data.languages)) setLanguages(data.languages);
      if (data.curriculum && typeof data.curriculum === 'object') setCurriculum(data.curriculum);
      if (data.studyMaterials && Array.isArray(data.studyMaterials)) setStudyMaterials(data.studyMaterials);
      if (data.paymentConfig) setPaymentConfig((prev) => ({ ...prev, ...data.paymentConfig }));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // Action: Reset back to defaults
  const resetToDefaultCurriculum = () => {
    setLanguages(DEFAULT_LANGUAGES);
    setCurriculum(DEFAULT_CURRICULUM);
    setStudyMaterials(DEFAULT_MATERIALS);
    setPaymentConfig(DEFAULT_PAYMENT_CONFIG);
    localStorage.removeItem('lingora_dynamic_languages');
    localStorage.removeItem('lingora_dynamic_curriculum');
    localStorage.removeItem('lingora_dynamic_materials');
    localStorage.removeItem('lingora_payment_config');
  };

  return (
    <CurriculumContext.Provider
      value={{
        languages,
        curriculum,
        studyMaterials,
        paymentConfig,
        addLanguage,
        addLesson,
        deleteLesson,
        addStudyMaterial,
        updatePaymentConfig,
        exportCurriculumData,
        importCurriculumData,
        resetToDefaultCurriculum,
      }}
    >
      {children}
    </CurriculumContext.Provider>
  );
}

export function useCurriculum() {
  const context = useContext(CurriculumContext);
  if (!context) {
    throw new Error('useCurriculum must be used within a CurriculumProvider');
  }
  return context;
}
