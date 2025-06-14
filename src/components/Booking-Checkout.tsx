'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Checkout from './checkout';
import ReactFlagsSelect from 'react-flags-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function BookingCheckout({ selected }: { selected: string }) {
    const [sessionCount, setSessionCount] = useState(8);
    const [paymentMethod, setPaymentMethod] = useState('sepa');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [cardHolderError, setCardHolderError] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardNumberError, setCardNumberError] = useState('');

    return (
        <div className="flex flex-col md:flex-row w-full  p-4 md:p-8 gap-6 ">
            {/* Left Form Section */}
            <div className="flex-1 bg-white p-6 rounded-xl shadow-md w-full h-full">
                <h2 className="text-2xl text-center font-bold mb-4">Registration & Booking at GoStudent</h2>
                <p className="text-sm text-center text-gray-500 mb-4">the leading platform for online tutoring.</p>
                <form className="grid grid-cols-1 md:grid-cols-2     gap-4">
                    <div className="flex flex-col col-span-2">
                        <label htmlFor="loginPhone" className="text-sm text-gray-400 font-medium mb-1">Login Phone Number</label>
                        <PhoneInput
                            country={'ae'}
                            inputClass="!w-full !bg-gray-50 !border-0 !p-2 !pl-12 !rounded"
                            containerClass="w-full"
                            inputProps={{
                                name: 'loginPhone',
                                required: true,
                                autoFocus: false,
                            }}
                            placeholder="Login phone number"
                            enableSearch
                        />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label htmlFor="contactPhone" className="text-sm text-gray-400 font-medium mb-1">Contact Phone Number</label>
                        <PhoneInput
                            country={'ae'}
                            inputClass="!w-full !bg-gray-50 !border-0 !p-2 !pl-12 !rounded"
                            containerClass="w-full"
                            inputProps={{
                                name: 'contactPhone',
                                required: true,
                            }}
                            placeholder="Contact phone number"
                            enableSearch
                        />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label htmlFor="email" className="text-sm text-gray-400 font-medium mb-1">Email Address</label>
                        <input id="email" className="bg-gray-50 p-2 rounded" placeholder="Email address" />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label htmlFor="contactName" className="text-sm text-gray-400 font-medium mb-1">Contact Name</label>
                        <input id="contactName" className="bg-gray-50 p-2 rounded" placeholder="Contact name" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="address" className="text-sm text-gray-400 font-medium mb-1">Address</label>
                        <input id="address" className="bg-gray-50 p-2 rounded" placeholder="Address" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="number" className="text-sm text-gray-400 font-medium mb-1">Number</label>
                        <input id="number" className="bg-gray-50  p-2 rounded" placeholder="Nr" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="postalCode" className="text-sm text-gray-400 font-medium mb-1">Postal Code</label>
                        <input id="postalCode" className="bg-gray-50 p-2 rounded" placeholder="Postal code" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="city" className="text-sm text-gray-400 font-medium mb-1">City</label>
                        <input id="city" className="bg-gray-50 p-2 rounded" placeholder="City" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="country" className="text-sm text-gray-400 font-medium mb-1">Country</label>
                        <ReactFlagsSelect
                            selected={selectedCountry}
                            onSelect={(code) => setSelectedCountry(code)}
                            className="bg-gray-50 !border-0 rounded"
                            searchable
                        />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label htmlFor="sessions" className="text-sm text-gray-400 font-medium mb-1">Monthly Sessions</label>
                        <select id="sessions" className="bg-gray-50 p-2 rounded" value={sessionCount} onChange={(e) => setSessionCount(parseInt(e.target.value))}>
                            <option value={8}>8 Sessions</option>
                            <option value={12}>12 Sessions</option>
                            <option value={16}>16 Sessions</option>
                            <option value={20}>20 Sessions</option>
                            <option value={24}>24 Sessions</option>
                            <option value={28}>28 Sessions</option>
                            <option value={32}>32 Sessions</option>
                            <option value={36}>36 Sessions</option>
                        </select>
                    </div>

                    <div className="col-span-2">
                        <label className="block mb-2 font-medium text-gray-400">Select Payment Method:</label>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <input type="radio" name="paymentMethod" value="sepa" id="sepa" onChange={(e) => setPaymentMethod(e.target.value)} checked={paymentMethod === 'sepa'} />
                                <label htmlFor="sepa" className="flex items-center gap-2">
                                    <Image src="./images/sepa.svg" alt="SEPA" className="h-6" width={34} height={34} />
                                </label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="card"
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    checked={paymentMethod === 'card'}
                                />
                                <label htmlFor="card" className="flex items-center gap-2">
                                    <Image src="./images/visa.svg" alt="Visa" className="h-6" width={34} height={34} />
                                    <Image src="./images/mastercard.svg" alt="Mastercard" className="h-6" width={34} height={34} />
                                </label>
                            </div>
                        </div>

                        <div id="cardDetails" className={`mt-4 ${paymentMethod === 'card' ? 'block' : 'hidden'}`}>
                            <div className="mb-2">
                                <input
                                    className={`bg-gray-50 p-2 rounded w-full ${cardHolderError ? 'border-red-500' : ''}`}
                                    placeholder="Card holder"
                                    value={cardHolder}
                                    onChange={(e) => {
                                        setCardHolder(e.target.value);
                                        setCardHolderError('');
                                    }}
                                />
                                {cardHolderError && (
                                    <p className="text-red-500 text-sm mt-1">{cardHolderError}</p>
                                )}
                            </div>
                            <div>
                                <input
                                    className={`bg-gray-50 p-2 rounded w-full ${cardNumberError ? 'border-red-500' : ''}`}
                                    placeholder="Card number"
                                    value={cardNumber}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '');
                                        setCardNumber(value);
                                        setCardNumberError('');
                                    }}
                                    maxLength={16}
                                />
                                {cardNumberError && (
                                    <p className="text-red-500 text-sm mt-1">{cardNumberError}</p>
                                )}
                            </div>
                        </div>

                        <div id="sepaDetails" className={`mt-4 ${paymentMethod === 'sepa' ? 'block' : 'hidden'}`}>
                            <input className="bg-gray-50 p-2 rounded w-full mb-2" placeholder="IBAN" />
                            <input className="bg-gray-50 p-2 rounded w-full" placeholder="Account holder" />
                        </div>
                    </div>
                </form>
            </div>

            {/* Sidebar Section */}
            <Checkout sessionCount={sessionCount} selected={selected} />
        </div>
    );
}
