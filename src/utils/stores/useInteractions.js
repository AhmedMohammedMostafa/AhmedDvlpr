import create from 'zustand';

export default create((set) => {
    return {
        /**
         * Settings
         */
        animationsTime: 1,

        /**
         * Phases
         */
        phase: 'loading',

        /**
         * Loaded => Start Animation Typing
         */
        loaded: () => set({ phase: 'loaded' }),

        /**
         * Start
         */
        // When loading (Animation Typing) end
        start: () => set({ phase: 'start' }),

        /**
         * Explore
         */
        explore: () => set({ phase: 'explore' }),

        /**
         * Projects
         */
        projects: () => set({ phase: 'projects' }),

        /**
         * Skills
         */
        skills: () => set({ phase: 'skills' }),

        /**
         * Education
         */

        /**
         * Experiences
         */

        // Everis

        /**
         * Contacts
         */
        contacts: () => set({ phase: 'contacts' })
    };
});
