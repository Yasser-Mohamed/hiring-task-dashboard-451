import React, { useState, useMemo } from 'react'

const sessionPlans = [
    { months: 6, discount: 5 },
    { months: 9, discount: 7 },
    { months: 12, discount: 10 },
    { months: 18, discount: 15 },
    { months: 24, discount: 20 },
    { months: 36, discount: 30 },
  ];
  
  const BASE_PRICE_PER_SESSION = 29.6;
  
export default function Checkout({ sessionCount, selected  }: { sessionCount: number, selected: string }) {
    const [selectedPlan, setSelectedPlan] = useState(sessionPlans[0]);
    const [termsAccepted, setTermsAccepted] = useState(false);


    const totalSessions = sessionCount;
  
    const regularTotal = BASE_PRICE_PER_SESSION * totalSessions;
    const discountAmount = useMemo(() => {
      return (regularTotal * selectedPlan.discount) / 100;
    }, [regularTotal, selectedPlan]);
  
    const finalPrice = regularTotal - discountAmount;

  return (
    <div className="w-full md:w-[350px] bg-gray-50 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Order Overview</h3>
        <div className="flex gap-2 mb-4">
          <div className="grid grid-cols-3 gap-0">
            {sessionPlans.map(plan => (
              <button
                key={plan.months}
                className={`px-4 py-2 rounded-none border border-gray-300 text-sm text-gray-400 ${selectedPlan.months === plan.months ? 'bg-blue-600 text-white' : 'bg-white'}`}
                onClick={() => setSelectedPlan(plan)}
              >
                {plan.months} Months
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-700 font-bold">
          <input type="checkbox" className="mr-2" />
          Pay in advance - EXTRA 5% DISCOUNT
        </div>

        <div className="text-sm text-gray-800">
          <p className="flex justify-between">
            <span className='text-gray-400'>Number of sessions p.a.:</span>
            <strong>{totalSessions}</strong>
          </p>
          <p className="flex justify-between">
            <span className='text-gray-400'>Regular price:</span>
            <span>{regularTotal.toFixed(2)} {selected}</span>
          </p>
          <p className="flex justify-between text-green-600">
            <span className=''>Discount ({selectedPlan.discount}%):</span>
            <span>-{discountAmount.toFixed(2)} {selected}</span>
          </p>
          <hr className="my-2" />
          <p className="flex justify-between">
            <span className='text-gray-400'>Setup fee:</span>
            <span className='text-blue-500'>0.00 {selected}</span>
          </p>
          <p className="flex justify-between">
            <span className='text-gray-400'>Total:</span>
            <span className='text-blue-500 font-bold'>{finalPrice.toFixed(2)} {selected}</span>
          </p>
        </div>

        <br/>

        <div className="mb-4 text-sm text-gray-400">
          <input 
            type="checkbox" 
            className="mr-2" 
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          I accept the <span className='text-blue-400'>terms & conditions</span> and understand my <span className='text-blue-400'>right of withdrawal</span> as well as the circumstances that lead to a repeal of the same.
        </div>

        <button 
          className={`w-full mt-4 p-2 rounded font-semibold ${
            termsAccepted 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!termsAccepted}
        >
          Order Now
        </button>
      </div>
  )
}
