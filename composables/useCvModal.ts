export const useCvModal = () => {
  const isOpen = useState<boolean>('isCvModalOpen', () => false)
  const cvUrl = useState<string>('cvModalUrl', () => '/cv_mahardikakdenie.pdf')

  const openCvModal = (url: string = '/cv_mahardikakdenie.pdf') => {
    cvUrl.value = url
    isOpen.value = true
  }

  const closeCvModal = () => {
    isOpen.value = false
  }

  return {
    isOpen,
    cvUrl,
    openCvModal,
    closeCvModal
  }
}
