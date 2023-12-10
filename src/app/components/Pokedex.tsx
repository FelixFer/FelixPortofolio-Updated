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
                {pokemonData?.map((pokemon) => (
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
                ))}
            </div>
        </div>
    )
}

export default Pokedex;