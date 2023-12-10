import { FaTimes } from 'react-icons/fa'
import { IPokemon } from '../interface/IPokemon';
import Image from 'next/image';
import { primary, secondary, tertiary } from '../utils/typeColors';

const Pokedex = ({ open, onClose, pokemonData }: { open: boolean, onClose: any, pokemonData: IPokemon[] | undefined }) => {
    function capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div onClick={onClose} className={`z-50 fixed inset-0 flex justify-center transition-colors ${open ? 'visible bg-gradient-to-br from-indigo-950 to-slate-950' : 'invisible'}`}>
            <div onClick={(e) => e.stopPropagation()} className={`overflow-auto bg-[#9287C0] h-96 rounded-xl shadow my-auto p-8 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                <button onClick={onClose} className='absolute top-2 right-2 p-1 rounded-lg text-gray-300 hover:bg-gray-50 hover:text-gray-600'>
                    <FaTimes />
                </button>
                {pokemonData ? pokemonData.map((pokemon) => (
                    <div key={pokemon.id} className='my-5 rounded-xl items-center flex p-2 shadow-lg active:translate-y-2 cursor-pointer active:[box-shadow:0_0px_0_0_#64599e,0_0px_0_0_#1b70f841]
                    active:border-b-[0px]
                    transition-all duration-150 [box-shadow:0_6px_0_0_#64599e,0_12px_0_0_#1b70f841]
                    border-b-[1px]' style={{ backgroundColor: secondary[(pokemon.types[0].type.name as keyof typeof secondary)] }}>
                        <Image src={pokemon && pokemon.sprites!.other['official-artwork']?.front_default} alt='pokemon' className='rounded-full mr-3' style={{ backgroundColor: tertiary[(pokemon.types[0].type.name as keyof typeof tertiary)] }} width={100} height={100} />
                        <div>
                            <h1 className='text-slate-50'>{pokemon ? capitalizeFirstLetter(pokemon.name) : 'loading'}</h1>
                            <div className='flex text-slate-50 gap-1 text-xs'>
                                <p className='rounded-md px-3 py-1 border-2' style={{ backgroundColor: primary[(pokemon.types[0].type.name as keyof typeof primary)] }}>
                                    {pokemon ? pokemon.types[0].type.name : 'loading'}
                                </p>
                                {pokemon.types[1] ? (
                                    <p className='rounded-md px-3 py-1 border-2' style={{ backgroundColor: primary[(pokemon.types[1].type.name as keyof typeof primary)] }}>{pokemon.types[1].type.name}</p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                )) : (
                    <div role="status" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Pokedex;