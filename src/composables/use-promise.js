import { ref } from 'vue'

export default function usePromise(fn) {
    const result = ref(null)
    const loading = ref(false)
    const error = ref(null)
    
    const createPromise = async (...args) => {
        result.value = null
        loading.value = true
        error.value = null

        try {
            result.value = await fn(...args)
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    return { result, loading, error, createPromise }
}