import React from 'react';
import { CoursePlan, ViewMode } from '../types';
import { APP_CONSTANTS } from '../constants';
import { CheckIcon } from './CheckIcon';

interface PricingCardProps {
  plan: CoursePlan;
  mode: ViewMode;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, mode }) => {
  const isMonthly = mode === ViewMode.MONTHLY;
  
  // Format numbers with commas
  const formatPrice = (price: number) => price.toLocaleString('en-IN');

  const currentPrice = isMonthly ? plan.monthlyPrice : plan.fullCoursePrice;
  const originalPrice = isMonthly ? plan.originalMonthlyPrice : plan.originalFullCoursePrice;

  // Calculate discount percent
  const discountPercent = originalPrice 
    ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
    : 0;

  return (
    <div className={`relative flex flex-col rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden group h-full transform hover:-translate-y-1`}>
      
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg">
            POPULAR
          </div>
        </div>
      )}

      {/* Header Gradient */}
      <div className={`h-2 w-full bg-gradient-to-r ${plan.color}`} />

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
        <p className="text-gray-600 text-sm mb-6 h-10">{plan.description}</p>

        {/* Price Section */}
        <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200 relative overflow-hidden">
           {/* Offer Badge inside price box */}
           {discountPercent > 0 && (
             <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg">
               {discountPercent}% OFF
             </div>
           )}

          <div className="flex flex-col">
             {/* Original Price */}
             {originalPrice && (
                <div className="text-gray-500 text-sm font-medium line-through decoration-gray-400 decoration-2 mb-[-4px]">
                  {APP_CONSTANTS.CURRENCY_SYMBOL}{formatPrice(originalPrice)}
                </div>
             )}
            
            <div className="flex items-end gap-1 mb-1">
              <span className="text-2xl font-bold text-gray-600">{APP_CONSTANTS.CURRENCY_SYMBOL}</span>
              <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
                {formatPrice(currentPrice)}
              </span>
              <span className="text-gray-600 font-medium mb-1">
                {isMonthly ? '/mo' : ' total'}
              </span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
            {isMonthly ? 'Pay as you go' : `${plan.durationMonths} Month Intensive`}
          </p>
        </div>

        {/* Features */}
        <div className="flex-1">
          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">What's included</h4>
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className={`mt-0.5 p-0.5 rounded-full bg-emerald-500 text-white`}>
                  <CheckIcon className="w-3 h-3" />
                </div>
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  {feature}
                </span>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <div className={`mt-0.5 p-0.5 rounded-full bg-emerald-500 text-white`}>
                <CheckIcon className="w-3 h-3" />
              </div>
              <span className="text-sm text-gray-700">Certificate of Completion</span>
            </li>
          </ul>
        </div>

        {/* Action Button - Converted to Link */}
        <a 
          href={APP_CONSTANTS.ENROLL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center w-full py-3 px-4 rounded-xl font-semibold text-white bg-emerald-500 hover:bg-emerald-600 shadow-lg hover:shadow-emerald-500/20 active:scale-95 transition-all duration-200 mt-auto"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
};