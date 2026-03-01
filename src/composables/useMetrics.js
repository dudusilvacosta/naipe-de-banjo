import { ref } from 'vue';

export function useMetrics() {
  const metrics = ref(null);
  const loading = ref(false);
  const error = ref(null);

  async function fetchMetrics() {
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch('/api/metrics');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      metrics.value = await res.json();
    } catch (err) {
      error.value = err.message;
      metrics.value = null;
    } finally {
      loading.value = false;
    }
  }

  return { metrics, loading, error, fetchMetrics };
}
