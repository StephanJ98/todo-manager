import { useModalStore } from "@/store/ModalStore"

const useModal = () => {
    const [isOpen, openModal, closeModal] = useModalStore((state) => [state.isOpen, state.openModal, state.closeModal])
    return { isOpen, openModal, closeModal }
}

export default useModal