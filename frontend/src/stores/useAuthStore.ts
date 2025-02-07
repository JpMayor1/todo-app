import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AuthStoreType } from '../types/auth.types';

const useAuthStore = create(
  persist<AuthStoreType>(
    (set) => ({
        account: null,
      setAuthUser: (account) => set({ account }),
    //   logoutUser: () => set({ authUser: null }),
    //   addTeamsToUser: (teams: string[]) => 
    //     set((state) => {
    //       if (state.authUser) {
    //         return {
    //           authUser: {
    //             ...state.authUser,
    //             teams: [...state.authUser.teams, ...teams],
    //           },
    //         };
    //       }
    //       return state;
    //     })
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;