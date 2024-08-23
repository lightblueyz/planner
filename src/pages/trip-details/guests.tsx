import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 ">
                    <div className="spac-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">Gabriel Melado</span>
                        <span className="block text-sm text-zinc-400 truncate ">
                            gabrielmelado@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between gap-4 ">
                    <div className="spac-y-1.5 flex-1">
                        <span className="block font-medium text-zinc-100">Érik o cão</span>
                        <span className="block text-sm text-zinc-400 truncate ">
                            erikotario@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>




            <Button variant="secundary" size="full" >
                <UserCog className="size-5" />
                Gerenciar Convidados
            </Button>

        </div>
    )
}