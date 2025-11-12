export interface ProjectPricingTier {
  levelKey: string;
  priceKey: string;
  features: string[];
  ctaKey: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  image: string;
  pricing: ProjectPricingTier[];
}

export const portfolioData: Project[] = [
  {
    id: "ecommerce-recommender",
    titleKey: "portfolio.projects.ecommerceRecommender.title",
    descriptionKey: "portfolio.projects.ecommerceRecommender.description",
    longDescriptionKey: "portfolio.projects.ecommerceRecommender.longDescription",
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop",
    pricing: [
      {
        levelKey: "portfolio.pricingLevels.basic",
        priceKey: "portfolio.pricing.level1",
        features: [
          "Batch analysis of purchase history",
          "Top-selling product recommendations",
          "Integration on product pages",
        ],
        ctaKey: "orderModal.submitButton",
      },
      {
        levelKey: "portfolio.pricingLevels.professional",
        priceKey: "portfolio.pricing.level2",
        features: [
          "Real-time user behavior tracking",
          "Personalized 'For You' section",
          "Collaborative filtering model",
          "A/B testing framework for strategies",
        ],
        ctaKey: "orderModal.submitButton",
      },
    ],
  },
  {
    id: "healthcare-predictive-analytics",
    titleKey: "portfolio.projects.healthcareAnalytics.title",
    descriptionKey: "portfolio.projects.healthcareAnalytics.description",
    longDescriptionKey: "portfolio.projects.healthcareAnalytics.longDescription",
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    pricing: [
      {
        levelKey: "portfolio.pricingLevels.basic",
        priceKey: "portfolio.pricing.level2",
        features: [
          "Readmission risk model based on historical data",
          "Patient risk scoring dashboard",
          "Monthly model performance reports",
        ],
        ctaKey: "orderModal.submitButton",
      },
      {
        levelKey: "portfolio.pricingLevels.professional",
        priceKey: "portfolio.pricing.level3",
        features: [
          "Integration with EMR/EHR system",
          "Real-time risk alerts for staff",
          "Resource allocation suggestion module",
          "Customizable risk factors",
        ],
        ctaKey: "orderModal.submitButton",
      },
    ],
  },
  {
    id: "real-time-analytics-dashboard",
    titleKey: "portfolio.projects.analyticsDashboard.title",
    descriptionKey: "portfolio.projects.analyticsDashboard.description",
    longDescriptionKey: "portfolio.projects.analyticsDashboard.longDescription",
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    pricing: [
      {
        levelKey: "portfolio.pricingLevels.basic",
        priceKey: "portfolio.pricing.level1",
        features: [
          "Up to 5 data sources",
          "1 interactive dashboard page",
          "Daily data refresh",
          "Standard KPI visualizations",
        ],
        ctaKey: "orderModal.submitButton",
      },
      {
        levelKey: "portfolio.pricingLevels.professional",
        priceKey: "portfolio.pricing.level2",
        features: [
          "Unlimited data sources",
          "Multi-page dashboards with drill-down",
          "Real-time data streaming",
          "Custom alerts and notifications",
        ],
        ctaKey: "orderModal.submitButton",
      },
    ],
  },
  {
    id: "logistics-optimization-engine",
    titleKey: "portfolio.projects.logisticsOptimization.title",
    descriptionKey: "portfolio.projects.logisticsOptimization.description",
    longDescriptionKey: "portfolio.projects.logisticsOptimization.longDescription",
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1587293852726-70cdb122c29a?q=80&w=2070&auto=format&fit=crop",
    pricing: [
        {
            levelKey: "portfolio.pricingLevels.basic",
            priceKey: "portfolio.pricing.level2",
            features: [
                "Single-depot route optimization",
                "Delivery time window constraints",
                "Batch processing of daily routes",
                "Route summary report"
            ],
            ctaKey: "orderModal.submitButton"
        },
        {
            levelKey: "portfolio.pricingLevels.professional",
            priceKey: "portfolio.pricing.level3",
            features: [
                "Multi-depot, real-time dynamic routing",
                "Vehicle capacity and load balancing",
                "Driver mobile app integration",
                "Predictive ETA calculations"
            ],
            ctaKey: "orderModal.submitButton"
        }
    ]
  },
  {
    id: "customer-churn-prediction",
    titleKey: "portfolio.projects.churnPrediction.title",
    descriptionKey: "portfolio.projects.churnPrediction.description",
    longDescriptionKey: "portfolio.projects.churnPrediction.longDescription",
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    pricing: [
        {
            levelKey: "portfolio.pricingLevels.basic",
            priceKey: "portfolio.pricing.level1",
            features: [
                "Model based on subscription data",
                "Monthly churn risk list generation",
                "Dashboard of key churn drivers"
            ],
            ctaKey: "orderModal.submitButton"
        },
        {
            levelKey: "portfolio.pricingLevels.professional",
            priceKey: "portfolio.pricing.level3",
            features: [
                "Integration with CRM for user activity data",
                "Real-time churn probability score for each user",
                "Automated retention campaign triggers",
                "What-if analysis simulator"
            ],
            ctaKey: "orderModal.submitButton"
        }
    ]
  },
  {
    id: "financial-fraud-detection",
    titleKey: "portfolio.projects.fraudDetection.title",
    descriptionKey: "portfolio.projects.fraudDetection.description",
    longDescriptionKey: "portfolio.projects.fraudDetection.longDescription",
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1554224155-169543018d41?q=80&w=2070&auto=format&fit=crop",
    pricing: [
        {
            levelKey: "portfolio.pricingLevels.professional",
            priceKey: "portfolio.pricing.level3",
            features: [
                "Real-time transaction analysis",
                "Anomaly detection using autoencoders",
                "Case management dashboard for investigators"
            ],
            ctaKey: "orderModal.submitButton"
        },
        {
            levelKey: "portfolio.pricingLevels.enterprise",
            priceKey: "portfolio.pricing.level4",
            features: [
                "Graph-based analysis for fraud rings",
                "Self-learning model adaptation",
                "Regulatory reporting automation",
                "Dedicated security and compliance audit"
            ],
            ctaKey: "orderModal.submitButton"
        }
    ]
  },
  {
    id: "sentiment-analysis-platform",
    titleKey: "portfolio.projects.sentimentAnalysis.title",
    descriptionKey: "portfolio.projects.sentimentAnalysis.description",
    longDescriptionKey: "portfolio.projects.sentimentAnalysis.longDescription",
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop",
    pricing: [
        {
            levelKey: "portfolio.pricingLevels.basic",
            priceKey: "portfolio.pricing.level1",
            features: [
                "Analysis of social media mentions",
                "Overall brand sentiment score",
                "Dashboard with positive/negative trends"
            ],
            ctaKey: "orderModal.submitButton"
        },
        {
            levelKey: "portfolio.pricingLevels.professional",
            priceKey: "portfolio.pricing.level2",
            features: [
                "Aspect-based sentiment (e.g., price, service)",
                "Emotion detection (e.g., joy, anger)",
                "Integration with customer support tickets",
                "Competitor sentiment tracking"
            ],
            ctaKey: "orderModal.submitButton"
        }
    ]
  },
  {
    id: "ai-powered-elearning",
    titleKey: "portfolio.projects.elearningPlatform.title",
    descriptionKey: "portfolio.projects.elearningPlatform.description",
    longDescriptionKey: "portfolio.projects.elearningPlatform.longDescription",
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1503676260728-1c64c1bae548?q=80&w=2070&auto=format&fit=crop",
    pricing: [
        {
            levelKey: "portfolio.pricingLevels.professional",
            priceKey: "portfolio.pricing.level3",
            features: [
                "Adaptive learning paths based on student performance",
                "Automated quiz generation from course material",
                "Student progress and at-risk prediction",
                "Content recommendation engine"
            ],
            ctaKey: "orderModal.submitButton"
        }
    ]
  },
  {
    id: "image-recognition-api",
    titleKey: "portfolio.projects.imageRecognition.title",
    descriptionKey: "portfolio.projects.imageRecognition.description",
    longDescriptionKey: "portfolio.projects.imageRecognition.longDescription",
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1617351347943-4e74cf9d9750?q=80&w=1932&auto=format&fit=crop",
    pricing: [
        {
            levelKey: "portfolio.pricingLevels.professional",
            priceKey: "portfolio.pricing.level3",
            features: [
                "Custom object detection model (up to 20 objects)",
                "REST API for model inference",
                "Up to 10,000 API calls per month",
                "Model training on your dataset"
            ],
            ctaKey: "orderModal.submitButton"
        }
    ]
  },
  {
    id: "dynamic-pricing-model",
    titleKey: "portfolio.projects.dynamicPricing.title",
    descriptionKey: "portfolio.projects.dynamicPricing.description",
    longDescriptionKey: "portfolio.projects.dynamicPricing.longDescription",
    image: "https://img-wrapper.vercel.app/image?url=https://images.unsplash.com/photo-1599658880299-15ab645b933a?q=80&w=2069&auto=format&fit=crop",
    pricing: [
        {
            levelKey: "portfolio.pricingLevels.professional",
            priceKey: "portfolio.pricing.level3",
            features: [
                "Competitor price tracking",
                "Demand forecasting model",
                "Price elasticity analysis",
                "Pricing rule engine and dashboard"
            ],
            ctaKey: "orderModal.submitButton"
        }
    ]
  }
];
