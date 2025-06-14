import React from 'react'
import ReactFlagsSelect from 'react-flags-select'

export interface NavbarProps {
  selected: string;
  setSelected: (code: string) => void;
}

export default function Navbar({ selected, setSelected }: NavbarProps) {
    const countries = [
        { country: "US", currency: "USD" },
        { country: "GB", currency: "GBP" },
        { country: "EU", currency: "EUR" },
        { country: "JP", currency: "JPY" },
        { country: "AU", currency: "AUD" },
        { country: "CA", currency: "CAD" },
        { country: "CH", currency: "CHF" },
        { country: "CN", currency: "CNY" },
        { country: "IN", currency: "INR" },
        { country: "BR", currency: "BRL" },
        { country: "EG", currency: "EGP" },
        { country: "AE", currency: "AED" },
    ];
    console.log('selected', selected)

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div dir='rtl' className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="relative">
                            <ReactFlagsSelect
                                selected={countries.find(c => c.currency === selected)?.country || 'AE'}
                                onSelect={(code) => {
                                    const country = countries.find(c => c.country === code);
                                    setSelected(country?.currency || 'AED');
                                }}
                                countries={countries.map(c => c.country)}
                                customLabels={countries.reduce((acc, curr) => ({
                                    ...acc,
                                    [curr.country]: `${curr.country} (${curr.currency})`
                                }), {})}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
