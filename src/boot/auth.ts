import { useAuthStore } from 'src/stores/auth';

export default async () => {
  const authStore = useAuthStore();
  await authStore.loadSession();
};
