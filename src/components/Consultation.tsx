import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Phone,
    Mail,
    Home,
    Building,
    Sparkles,
    CheckCircle,
    User,
    MessageSquare,
    Wrench
} from 'lucide-react';
import useConsultationStore from '@/store/Consultation';


const Consultation = () => {
    const { isOpen, closeConsultation } = useConsultationStore();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        service: '',
        projectType: '',
        budget: '',
        timeframe: '',
        message: '',
        preferredContact: 'phone'
    });

    const services = [
        { id: 'interior', name: 'Interior Design', icon: Home, description: 'Custom interior design and fit-out services' },
        { id: 'cleaning', name: 'Cleaning Services', icon: Sparkles, description: 'Professional cleaning and maintenance' },
        { id: 'technical', name: 'Technical Services', icon: Wrench, description: 'Plumbing, electrical, masonry, and carpentry services' }
    ];

    const projectTypes = {
        interior: ['Residential Villa', 'Apartment', 'Office Space', 'Retail Store', 'Restaurant', 'Hotel'],
        cleaning: ['One-time Deep Clean', 'Regular Maintenance', 'Post-Construction', 'Commercial Space'],
        technical: ['Plumbing Services', 'Electrical Work', 'Masonry & Tiling', 'Carpentry Services', 'HVAC Installation', 'Maintenance Contract']
    };

    const budgetRanges = {
        interior: [
            'Under ৳ 2,50,000',
            '৳ 2,50,000 - 5,00,000',
            '৳ 5,00,000 - 10,00,000',
            '৳ 10,00,000 - 25,00,000',
            'Above ৳ 25,00,000'
        ],
        cleaning: [
            'Under ৳ 5,000',
            '৳ 5,000 - 15,000',
            '৳ 15,000 - 30,000',
            '৳ 30,000 - 50,000',
            'Above ৳ 50,000'
        ],
        technical: [
            'Under ৳ 50,000',
            '৳ 50,000 - 1,50,000',
            '৳ 1,50,000 - 3,00,000',
            '৳ 3,00,000 - 8,00,000',
            'Above ৳ 8,00,000'
        ]
    };

    const timeframes = {
        interior: [
            'Planning phase',
            'Within 2 months',
            '3-6 months',
            '6-12 months',
            'Flexible timeline'
        ],
        cleaning: [
            'ASAP',
            'Within 1 week',
            'Within 2 weeks',
            'Monthly service',
            'Quarterly service'
        ],
        technical: [
            'ASAP',
            'Within 1 week',
            'Within 1 month',
            '2-3 months',
            'Planning phase'
        ]
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log('Consultation request:', formData);
        // Reset form and close modal
        setFormData({
            name: '', email: '', phone: '', location: '', service: '',
            projectType: '', budget: '', timeframe: '', message: '', preferredContact: 'phone'
        });
        setCurrentStep(1);
        closeConsultation();
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.name && formData.email && formData.phone;
            case 2:
                return formData.service && formData.projectType;
            case 3:
                return formData.budget && formData.timeframe;
            default:
                return false;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeConsultation}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative bg-background border border-border rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-2xl h-full sm:h-auto sm:max-h-[95vh] overflow-hidden flex flex-col"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
                    >
                        {/* Header */}
                        <div className="relative p-3 sm:p-4 lg:p-5 border-b border-border bg-gradient-to-r from-accent/5 to-primary/5 flex-shrink-0">
                            <button
                                onClick={closeConsultation}
                                className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 p-2 hover:bg-accent/10 rounded-full transition-colors"
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                            </button>

                            <div className="text-center">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                                    Free Consultation
                                </h2>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Let's discuss your project and provide expert guidance
                                </p>
                            </div>

                            {/* Progress Indicator */}
                            <div className="flex justify-center mt-3 sm:mt-4">
                                <div className="flex space-x-2">
                                    {[1, 2, 3].map((step) => (
                                        <div
                                            key={step}
                                            className={`w-6 sm:w-8 h-2 rounded-full transition-all duration-300 ${step <= currentStep ? 'bg-accent' : 'bg-accent/20'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="p-3 sm:p-4 lg:p-5">
                                <AnimatePresence mode="wait">
                                    {/* Step 1: Personal Information */}
                                    {currentStep === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-3 sm:space-y-4"
                                        >
                                            <div className="text-center mb-3 sm:mb-4">
                                                <User className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-2" />
                                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                                                    Personal Information
                                                </h3>
                                                <p className="text-sm sm:text-base text-muted-foreground">
                                                    Tell us about yourself
                                                </p>
                                            </div>

                                            <div className="grid gap-3 sm:grid-cols-2">
                                                <div>
                                                    <label className="block text-foreground font-medium mb-1.5 text-sm sm:text-base">
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={formData.name}
                                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-border rounded-lg sm:rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm sm:text-base"
                                                        placeholder="Enter your full name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-foreground font-medium mb-1.5 text-sm sm:text-base">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-border rounded-lg sm:rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm sm:text-base"
                                                        placeholder="your.email@example.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid gap-3 sm:grid-cols-2">
                                                <div>
                                                    <label className="block text-foreground font-medium mb-1.5 text-sm sm:text-base">
                                                        Phone Number *
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-border rounded-lg sm:rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm sm:text-base"
                                                        placeholder="+880 1712 XXX XXX"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-foreground font-medium mb-1.5 text-sm sm:text-base">
                                                        Location
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={formData.location}
                                                        onChange={(e) => handleInputChange('location', e.target.value)}
                                                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-border rounded-lg sm:rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-sm sm:text-base"
                                                        placeholder="Dhaka, Bangladesh"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-foreground font-medium mb-2 text-sm sm:text-base">
                                                    Preferred Contact Method
                                                </label>
                                                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                                                    {[{
                                                        value: 'phone', label: 'Phone Call', icon: Phone
                                                    },
                                                    {
                                                        value: 'email', label: 'Email', icon: Mail
                                                    }
                                                    ].map((method) => (
                                                        <button
                                                            key={method.value}
                                                            onClick={() => handleInputChange('preferredContact', method.value)}
                                                            className={`flex-1 flex items-center justify-center space-x-2 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border transition-all text-sm sm:text-base ${formData.preferredContact === method.value
                                                                ? 'border-accent bg-accent/10 text-accent'
                                                                : 'border-border hover:border-accent/50'
                                                                }`}
                                                        >
                                                            <method.icon className="w-4 h-4" />
                                                            <span className="font-medium">{method.label}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 2: Service Selection */}
                                    {currentStep === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-3 sm:space-y-4"
                                        >
                                            <div className="text-center mb-3 sm:mb-4">
                                                <Building className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-2" />
                                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                                                    Service & Project Type
                                                </h3>
                                                <p className="text-sm sm:text-base text-muted-foreground">
                                                    What service do you need?
                                                </p>
                                            </div>

                                            <div>
                                                <label className="block text-foreground font-medium mb-2 text-sm sm:text-base">
                                                    Select Service *
                                                </label>
                                                <div className="grid gap-2.5">
                                                    {services.map((service) => (
                                                        <button
                                                            key={service.id}
                                                            onClick={() => {
                                                                handleInputChange('service', service.id);
                                                                handleInputChange('projectType', '');
                                                                handleInputChange('budget', '');
                                                                handleInputChange('timeframe', '');
                                                            }}
                                                            className={`flex items-center space-x-3 sm:space-x-3.5 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border transition-all text-left ${formData.service === service.id
                                                                ? 'border-accent bg-accent/10'
                                                                : 'border-border hover:border-accent/50'
                                                                }`}
                                                        >
                                                            <service.icon className={`w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0 ${formData.service === service.id ? 'text-accent' : 'text-muted-foreground'
                                                                }`} />
                                                            <div>
                                                                <h4 className="font-semibold text-foreground text-sm sm:text-base">{service.name}</h4>
                                                                <p className="text-xs sm:text-sm text-muted-foreground">{service.description}</p>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {formData.service && (
                                                <div>
                                                    <label className="block text-foreground font-medium mb-2 text-sm sm:text-base">
                                                        Project Type *
                                                    </label>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        {projectTypes[formData.service as keyof typeof projectTypes]?.map((type) => (
                                                            <button
                                                                key={type}
                                                                onClick={() => handleInputChange('projectType', type)}
                                                                className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl border transition-all text-xs sm:text-sm ${formData.projectType === type
                                                                    ? 'border-accent bg-accent/10 text-accent'
                                                                    : 'border-border hover:border-accent/50'
                                                                    }`}
                                                            >
                                                                {type}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}

                                    {/* Step 3: Project Details */}
                                    {currentStep === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-3 sm:space-y-4"
                                        >
                                            <div className="text-center mb-3 sm:mb-4">
                                                <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-2" />
                                                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                                                    Project Details
                                                </h3>
                                                <p className="text-sm sm:text-base text-muted-foreground">
                                                    Help us understand your requirements
                                                </p>
                                            </div>

                                            <div>
                                                <label className="block text-foreground font-medium mb-2 text-sm sm:text-base">
                                                    Budget Range *
                                                </label>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {(budgetRanges[formData.service as keyof typeof budgetRanges] || []).map((budget) => (
                                                        <button
                                                            key={budget}
                                                            onClick={() => handleInputChange('budget', budget)}
                                                            className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl border transition-all text-xs sm:text-sm ${formData.budget === budget
                                                                ? 'border-accent bg-accent/10 text-accent'
                                                                : 'border-border hover:border-accent/50'
                                                                }`}
                                                        >
                                                            {budget}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-foreground font-medium mb-2 text-sm sm:text-base">
                                                    Timeline *
                                                </label>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {(timeframes[formData.service as keyof typeof timeframes] || []).map((timeframe) => (
                                                        <button
                                                            key={timeframe}
                                                            onClick={() => handleInputChange('timeframe', timeframe)}
                                                            className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl border transition-all text-xs sm:text-sm ${formData.timeframe === timeframe
                                                                ? 'border-accent bg-accent/10 text-accent'
                                                                : 'border-border hover:border-accent/50'
                                                                }`}
                                                        >
                                                            {timeframe}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-foreground font-medium mb-1.5 text-sm sm:text-base">
                                                    Additional Details
                                                </label>
                                                <textarea
                                                    value={formData.message}
                                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                                    rows={3}
                                                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-border rounded-lg sm:rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none text-xs sm:text-sm"
                                                    placeholder="Tell us more about your project requirements, specific needs, or any questions you have..."
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-3 sm:p-4 lg:p-5 border-t border-border bg-muted/20 flex-shrink-0">
                            <div className="flex justify-between">
                                <button
                                    onClick={handleBack}
                                    disabled={currentStep === 1}
                                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold transition-all text-sm sm:text-base ${currentStep === 1
                                        ? 'text-muted-foreground cursor-not-allowed'
                                        : 'text-foreground hover:bg-muted'
                                        }`}
                                >
                                    Back
                                </button>

                                {currentStep < 3 ? (
                                    <button
                                        onClick={handleNext}
                                        disabled={!isStepValid()}
                                        className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold transition-all text-sm sm:text-base ${isStepValid()
                                            ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                                            : 'bg-muted text-muted-foreground cursor-not-allowed'
                                            }`}
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!isStepValid()}
                                        className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold transition-all flex items-center space-x-2 text-sm sm:text-base ${isStepValid()
                                            ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                                            : 'bg-muted text-muted-foreground cursor-not-allowed'
                                            }`}
                                    >
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Submit Request</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Consultation;
