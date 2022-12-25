import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/logo2.gif" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">Astra Bot</p>
                            </div>
                            <Menu as="div" className="relative mt-3 inline-block text-left">
                                <div>
                                    <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={`https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg`}
                                            width="24"
                                            height="18"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        Türkçe
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>

                                </div>
                            </Menu>
                        </div>
                        </div>
                        
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; Astra Bot
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-green-400"}>
                                    Astra Müzik Botu Şuanda Çevrimiçi !
                                </p>
                        </div>
                        <p className="text-white text-center sm:text-right text-opacity-50">
                            {"İtalyan#0142 - Astra Bot"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
