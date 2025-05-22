import { create } from "zustand";

interface FormData {
    name: string;
    email: string;
    course: string;
}

interface FormStore {
    formData: FormData;
    setFormData: (data: Partial<FormData>) => void;
    isLoading: boolean;
    resetForm: () => void;
    setLoading: (loading: boolean) => void;
}

export const useFormStore = create<FormStore>((set) => ({
    formData: { name: '', email: '', course: '' },
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
    isLoading: false,
    setLoading: (loading) => set({ isLoading: loading }),
    resetForm: () => set({ formData: { name: '', email: '', course: '' } }),
}));