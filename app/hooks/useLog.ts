import { usePassedStore } from '@/store/LoggedStore'

const useLog = () => {
    const [logged, setLogged] = usePassedStore((state) => [state.logged, state.setLogged])
    return { logged, setLogged }
}

export default useLog