import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Link Importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 ">
                    <div className="spac-y-1.5 flex-1">
                        <a className="block font-medium text-zinc-100">Reserva AirBnB</a>
                        <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.airbnb.com.br/roms/5832809328158185128518515
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between gap-4 ">
                    <div className="spac-y-1.5 flex-1">
                        <a className="block font-medium text-zinc-100">Regras da Casa</a>
                        <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.notion.com/page/5292496029868320683426
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>




            <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                <Plus className="size-5" />
                Cadastrar novo link
            </button>

        </div>
    )
}








