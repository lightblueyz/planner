import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InvitesGuestsModal } from "./invite-guests-modal"
import { ConfirmTripModal } from "./confirm-trip-modal"
import { DestinationAndDateStep } from "./steps/destination-and-date"
import { InvitesGuestsStep } from "./steps/invite-guests-step"


export function CreateTripPage() {
    const navigate = useNavigate()

    const [isGuestInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
    const [emailsToInvite, setEmailsToInvite] = useState([
        "teste do melado"
    ])

    function OpenGuestsInput() {
        setIsGuestsInputOpen(true)
    }

    function closeGuestsInput() {
        setIsGuestsInputOpen(false)
    }

    function OpenGuestsModal() {
        setIsGuestsModalOpen(true)
    }

    function closeGuestsModal() {
        setIsGuestsModalOpen(false)
    }

    function OpenConfirmTripModal() {
        setIsConfirmTripModalOpen(true)
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }


    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        if (!email) {
            return
        }

        if (emailsToInvite.includes(email)) {
            return alert("puta desgraçada")
        }

        setEmailsToInvite([
            ...emailsToInvite,
            email
        ])


        event.currentTarget.reset()
    }

    function removeEmailsFromInvites(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        setEmailsToInvite(newEmailList)
    }



    function createTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault

        navigate('/trips/123')
    }

    return (
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10" >
                <div className="flex flex-col items-center gap-3">
                    <img src="/logo.svg" alt="plann.er" />
                    <p className="text-zinc-300 text-large">Convide seus amigos e planeja a sua próxima viagem!</p>
                </div>


                <div className="space-y-4">


                    <DestinationAndDateStep
                        OpenGuestsInput={OpenGuestsInput}
                        closeGuestsInput={closeGuestsInput}
                        isGuestInputOpen={isGuestInputOpen}
                    />




                    {isGuestInputOpen && (
                        <InvitesGuestsStep
                            OpenConfirmTripModal={OpenConfirmTripModal}
                            OpenGuestsModal={OpenGuestsModal}
                            emailsToInvite={emailsToInvite}
                        />
                    )}
                </div>


                <p className="text-sm text-zinc-500">
                    Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
                    com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>
                </p>
            </div>


            {isGuestsModalOpen && (
                <InvitesGuestsModal
                    emailsToInvite={emailsToInvite}
                    addNewEmailToInvite={addNewEmailToInvite}
                    closeGuestsModal={closeGuestsModal}
                    removeEmailsFromInvites={removeEmailsFromInvites}

                />
            )}

            {isConfirmTripModalOpen && (
                <ConfirmTripModal
                    createTrip={createTrip}
                    closeConfirmTripModal={closeConfirmTripModal}
                />
            )}

        </div>
    )
}

