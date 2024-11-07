import React, { useState } from 'react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import { logo } from "../assets";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';

const WebsiteForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        businessName: '',
        businessDescription: [],
        hasPreviousWebsite: null,
        extraInfo: '',
        primaryGoals: [],
        importanceLevel: 9,
        functionalities: [],
        websiteScale: [],
        budget: '',
        name: '',
        email: '',
        phone: '',
        referralSource: '',
        experienceRating: 0,
        honeypot: ''
    });
    const [errors, setErrors] = useState({});
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionFeedback, setSubmissionFeedback] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { t } = useTranslation();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: prevData[name].includes(value)
                    ? prevData[name].filter((item) => item !== value)
                    : [...prevData[name], value],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSelection = (value) => {
        setFormData((prevData) => ({ ...prevData, importanceLevel: value }));
    };

    const handleRatingChange = (rating) => {
        setFormData((prevData) => ({ ...prevData, experienceRating: rating }));
    };

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.businessName) newErrors.businessName = t("form.error.generic");
        if (formData.businessDescription.length === 0) newErrors.businessDescription = t("form.error.generic");
        if (formData.hasPreviousWebsite === null) newErrors.hasPreviousWebsite = t("form.error.generic");
        if (currentStep === 2) {
            if (formData.primaryGoals.length === 0) newErrors.primaryGoals = t("form.error.generic");
            if (formData.functionalities.length === 0) newErrors.functionalities = t("form.error.generic");
            if (formData.websiteScale.length === 0) newErrors.websiteScale = t("form.error.generic");
            if (!formData.budget) newErrors.budget = t("form.error.generic");
        }
        if (currentStep === 3) {
            if (!formData.name) newErrors.name = t("form.error.generic");
            if (!formData.email) newErrors.email = t("form.error.generic");
            if (!formData.phone) newErrors.phone = t("form.error.generic");
            if (!formData.referralSource) newErrors.referralSource = t("form.error.generic");
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.honeypot) {
            return;
        }
        if (validateForm() && captchaVerified) {
            setIsSubmitting(true);
            setSubmissionFeedback('');
            const emailParams = {
                business_name: formData.businessName,
                business_description: formData.businessDescription.join(', '),
                has_previous_website: formData.hasPreviousWebsite ? "Yes" : "No",
                extra_info: formData.extraInfo,
                primary_goals: formData.primaryGoals.join(', '),
                importance_level: formData.importanceLevel,
                functionalities: formData.functionalities.join(', '),
                website_scale: formData.websiteScale.join(', '),
                budget: formData.budget,
                user_name: formData.name,
                user_email: formData.email,
                phone_number: formData.phone,
                referral_source: formData.referralSource,
                experience_rating: formData.experienceRating,
            };

            emailjs.send('service_rum3kyn', 'template_mub9opt', emailParams, 'O8rzLuaPLX2I1_heK')
                .then((result) => {
                    setIsSubmitting(false);
                    setSubmissionFeedback(t('form.successMessage'));
                    setFormSubmitted(true);
                    setFormData({
                        businessName: '',
                        businessDescription: [],
                        hasPreviousWebsite: null,
                        extraInfo: '',
                        primaryGoals: [],
                        importanceLevel: 9,
                        functionalities: [],
                        websiteScale: [],
                        budget: '',
                        name: '',
                        email: '',
                        phone: '',
                        referralSource: '',
                        experienceRating: 0,
                        honeypot: ''
                    });
                    console.log('Email successfully sent!', result.text);
                }, (error) => {
                    setIsSubmitting(false);
                    setSubmissionFeedback(t('form.errorMessage'));
                    console.error('There was an error sending the email:', error);
                });
        }
    };

    const stepTitles = [
        t("form.step1.title"),
        t("form.step2.title"),
        t("form.step3.title")
    ];

    const stepSubtitles = [
        "",
        t("form.step2.subtitle"),
        ""
    ];

    if (formSubmitted) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center text-green-500">
                    {submissionFeedback}
                </div>
            </div>
        );
    }

    return (
        <div className="background-shadows relative">

            <form
                onSubmit={handleSubmit}
                className="bg-[#292929] p-8 rounded-lg w-full mx-auto "
            >
                <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                />
                <div className="mb-6">
                    <div className="flex justify-center ">
                        <img
                            src={logo}
                            alt="aurigital"
                            className="shadow-custom rounded-lg mb-6"
                            width={35}
                        />
                    </div>
                    <h1 className="text-white text-2xl font-bold text-center mb-2 orbitron">{t("form.mainTitle")}</h1>
                    <p className="text-white text-sm text-center quicksand-md">{t("form.mainSubtitle")}</p>
                    <div className="text-gray-400 text-sm mt-4">{t("form.stepLabel", { currentStep, totalSteps: 3 })}</div>
                    <h2 className="text-white text-2xl font-bold quicksand-b">{stepTitles[currentStep - 1]}</h2>
                    {stepSubtitles[currentStep - 1] && (
                        <p className="text-gray-400 mb-4 quicksand">{stepSubtitles[currentStep - 1]}</p>
                    )}
                    <div className="w-full bg-gray-600 h-2 rounded-full mt-2">
                        <div
                            className={`bg-blue-500 h-full rounded-full transition-all duration-300 ${currentStep === 1 ? 'w-1/3' : currentStep === 2 ? 'w-2/3' : 'w-full'
                                }`}
                        ></div>
                    </div>
                </div>

                {currentStep === 1 && (
                    <Step1
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleRatingChange={handleRatingChange}
                        errors={errors}
                    />
                )}

                {currentStep === 2 && (
                    <Step2
                        formData={formData}
                        handleInputChange={handleInputChange}
                        selectedValue={formData.importanceLevel}
                        handleSelection={handleSelection}
                        errors={errors}
                    />
                )}
                {currentStep === 3 && (
                    <Step3 formData={formData} handleInputChange={handleInputChange} errors={errors} />
                )}

                {currentStep === 3 && (
                    <div className="my-4 flex justify-center">
                        <ReCAPTCHA
                            sitekey="6LfN_XYqAAAAADEnyr0dvQv-PnqTLoRcPA6kc1FK"
                            onChange={handleCaptchaChange}
                        />
                    </div>
                )}

                <div className="mt-5 flex flex-row justify-center gap-2">
                    {currentStep > 1 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="transparent-blur-button max-sm:text-xs text-sm shadow-custom flex items-center gap-1"
                        >
                            <GoArrowLeft /> {t("form.back")}
                        </button>
                    )}
                    {currentStep < 3 && (
                        <button
                            type="button"
                            onClick={() => {
                                if (validateForm()) handleNext();
                            }}
                            className="transparent-blur-button max-sm:text-xs text-sm shadow-custom flex items-center gap-1"
                        >
                            {t("form.next")} <GoArrowRight />
                        </button>
                    )}
                    {currentStep === 3 && (
                        <button
                            type="submit"
                            className="transparent-blur-button max-sm:text-xs text-sm shadow-custom"
                            disabled={!captchaVerified || isSubmitting}
                        >
                            {isSubmitting ? t("form.submitting") : t("form.submit")}
                        </button>
                    )}
                </div>
                {submissionFeedback && (
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className={`p-4 rounded-md shadow-md ${submissionFeedback === t('form.successMessage') ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>
                            {submissionFeedback}
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

const Step1 = ({ formData, handleInputChange, handleRatingChange, errors }) => {
    const [hoverRating, setHoverRating] = useState(0);
    const { t } = useTranslation();
    return (
        <>
            <div className="mb-4">
                <label htmlFor="businessName" className="text-white font-[600]">
                    {t("form.step1.businessName")}
                </label>
                <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full bg-[#545454] text-white p-2 mt-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
            </div>
            <h2 className="text-white font-[600]">
                {t("form.step1.describeBusiness")}
            </h2>
            <p className="text-gray-400 text-md mb-2">{t("form.selectAllThatApply")}</p>
            <div className="mb-4 text-sm md:text-md md:font-[400] font-[200]">
                <div className="flex items-start flex-col gap-2 text-gray-600 ">
                    {[...t("form.step1.businessDescriptions", { returnObjects: true })].map((description) => (
                        <label key={description} className="text-white flex items-center">
                            <input
                                type="checkbox"
                                name="businessDescription"
                                value={description}
                                checked={formData.businessDescription.includes(description)}
                                onChange={handleInputChange}
                                className="mr-2 min-h-[16px] min-w-[16px]  appearance-none bg-[#545454] rounded checked:bg-blue-400 cursor-pointer"
                            />
                            {description}
                        </label>
                    ))}
                </div>
                {errors.businessDescription && <p className="text-red-500 text-xs mt-1">{errors.businessDescription}</p>}
            </div>

            <h2 className="text-white font-[600] mb-2">{t("form.step1.hasPreviousWebsite")}</h2>
            <div className="mb-4">
                <div className="flex items-center gap-40">
                    {["yes", "no"].map((option) => (
                        <label key={option} className="text-white">
                            <input
                                type="radio"
                                name="hasPreviousWebsite"
                                value={option}
                                checked={formData.hasPreviousWebsite === option}
                                onChange={handleInputChange}
                                className="mr-2 min-h-[16px] min-w-[16px]  appearance-none bg-[#545454] rounded-xl checked:bg-blue-400 cursor-pointer"
                            />
                            {t(`form.${option}`)}
                        </label>
                    ))}
                </div>
                {errors.hasPreviousWebsite && <p className="text-red-500 text-xs mt-1">{errors.hasPreviousWebsite}</p>}
            </div>

            <h2 className="text-white font-[600] mb-2">{t("form.step1.experience")}</h2>
            <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                        key={star}
                        className={`h-6 w-6 cursor-pointer ${star <= (hoverRating || formData.experienceRating)
                            ? 'text-blue-400'
                            : 'text-gray-500'
                            }`}
                        onClick={() => handleRatingChange(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                    />
                ))}
            </div>

            <h2 className="text-white font-[600] mb-2">{t("form.step1.extraInfo")}</h2>
            <div className="mb-4">
                <textarea
                    id="extraInfo"
                    name="extraInfo"
                    value={formData.extraInfo}
                    onChange={handleInputChange}
                    className="w-full bg-[#545454] text-white p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                    rows="3"
                ></textarea>
            </div>
        </>
    );
};

const Step2 = ({ formData, handleInputChange, selectedValue, handleSelection, errors }) => {
    const { t } = useTranslation();
    return (
        <>
            <h3 className="text-white font-[600]">{t("form.step2.primaryGoals")}</h3>
            <p className="text-gray-400 text-md mb-2">{t("form.selectAllThatApply")}</p>
            <div className="mb-4 text-sm md:text-md md:font-[400] font-[200]">
                {[...t("form.step2.primaryGoalsList", { returnObjects: true })].map((goal) => (
                    <label key={goal} className="text-white flex items-center">
                        <input
                            type="checkbox"
                            name="primaryGoals"
                            value={goal}
                            checked={formData.primaryGoals.includes(goal)}
                            onChange={handleInputChange}
                            className="mr-2 min-h-[16px] min-w-[16px]  appearance-none bg-[#545454] rounded checked:bg-blue-400 cursor-pointer"
                        />
                        {goal}
                    </label>
                ))}
            </div>
            {errors.primaryGoals && <p className="text-red-500 text-xs mt-1">{errors.primaryGoals}</p>}

            <h3 className="text-white font-[600]">{t("form.step2.functionalities")}</h3>
            <p className="text-gray-400 text-md mb-2">{t("form.selectAllThatApply")}</p>
            <div className="mb-4 text-sm md:text-md md:font-[400] font-[200]">
                {[...t("form.step2.functionalitiesList", { returnObjects: true })].map((functionality) => (
                    <label key={functionality} className="text-white flex items-center">
                        <input
                            type="checkbox"
                            name="functionalities"
                            value={functionality}
                            checked={formData.functionalities.includes(functionality)}
                            onChange={handleInputChange}
                            className="mr-2 min-h-[16px] min-w-[16px]  appearance-none bg-[#545454] rounded checked:bg-blue-400 cursor-pointer"
                        />
                        {functionality}
                    </label>
                ))}
            </div>
            {errors.functionalities && <p className="text-red-500 text-xs mt-1">{errors.functionalities}</p>}

            <h3 className="text-white font-[600]">{t("form.step2.websiteScale")}</h3>
            <p className="text-gray-400 text-md mb-2">{t("form.selectAllThatApply")}</p>
            <div className="mb-4 text-sm md:text-md md:font-[400] font-[200]">
                {[...t("form.step2.websiteScaleList", { returnObjects: true })].map((scale) => (
                    <label key={scale} className="text-white flex items-center">
                        <input
                            type="checkbox"
                            name="websiteScale"
                            value={scale}
                            checked={formData.websiteScale.includes(scale)}
                            onChange={handleInputChange}
                            className="mr-2 min-h-[16px] min-w-[16px]  appearance-none bg-[#545454] rounded checked:bg-blue-400 cursor-pointer"
                        />
                        {scale}
                    </label>
                ))}
            </div>
            {errors.websiteScale && <p className="text-red-500 text-xs mt-1">{errors.websiteScale}</p>}

            <h3 className="text-white font-[600]">{t("form.step2.budget")}</h3>
            <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full bg-[#545454] text-white p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
            <p className="text-gray-400 text-sm mb-2">{t("form.step2.currencyNote")}</p>

            <div className="w-full">
                <h3 className="text-white font-[600] mb-4">{t("form.step2.importanceLevel")}</h3>
                <div className="grid grid-cols-5 gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <button
                            key={value}
                            onClick={() => handleSelection(value)}
                            className={
                                `relative py-3 rounded-md transition-all duration-200 ${formData.importanceLevel === value ? 'bg-blue-500 text-white' : 'bg-[#545454] text-gray-400 hover:bg-gray-600'}`
                            }
                        >
                            {value}
                        </button>
                    ))}
                </div>
                <div className="flex justify-between text-gray-400 text-sm px-1">
                    <span>{t("form.step2.notLikely")}</span>
                    <span>{t("form.step2.veryLikely")}</span>
                </div>
            </div>
        </>
    );
};

const Step3 = ({ formData, handleInputChange, errors }) => {
    const { t } = useTranslation();
    return (
        <>
            <div>
                <label htmlFor="name" className="text-white font-[600]">{t("form.step3.name")}</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("form.step3.namePlaceholder")}
                    className="w-full bg-[#545454] text-white p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="phone" className="text-white font-[600]">{t("form.step3.phoneNumber")}</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t("form.step3.phonePlaceholder")}
                        className="w-full bg-[#545454] text-white p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="text-white font-[600]">{t("form.step3.emailAddress")}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t("form.step3.emailPlaceholder")}
                        className="w-full bg-[#545454] text-white p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
            </div>
            <h3 className="text-white font-[600] mb-4">{t("form.step3.referralSource")}</h3>
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...t("form.step3.referralSources", { returnObjects: true })].map((source) => (
                    <label key={source} className="text-white flex items-center">
                        <input
                            type="radio"
                            name="referralSource"
                            value={source}
                            checked={formData.referralSource === source}
                            onChange={handleInputChange}
                            className="mr-2 min-h-[16px] min-w-[16px]  appearance-none bg-[#545454] rounded-xl checked:bg-blue-400 cursor-pointer"
                        />
                        {source}
                    </label>
                ))}
            </div>
            {errors.referralSource && <p className="text-red-500 text-xs mt-1">{errors.referralSource}</p>}
        </>
    );
};

export default WebsiteForm;
