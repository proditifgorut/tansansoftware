export interface PricingTier {
  levelKey: string;
  priceKey: string;
  featuresKey: string;
  ctaKey: string;
}

export interface Algorithm {
  id: string;
  nameKey: string;
  descriptionKey: string;
  pricing: PricingTier[];
}

export interface ServiceCategory {
  id: 'data-analysis' | 'data-mining' | 'data-science' | 'machine-learning';
  titleKey: string;
  descriptionKey: string;
  algorithms: Algorithm[];
}

export const aiServices: ServiceCategory[] = [
  {
    id: 'data-analysis',
    titleKey: 'aiServices.dataAnalysis.title',
    descriptionKey: 'aiServices.dataAnalysis.description',
    algorithms: [
      {
        id: 'descriptive-stats',
        nameKey: 'aiServices.dataAnalysis.algorithms.descriptive.name',
        descriptionKey: 'aiServices.dataAnalysis.algorithms.descriptive.description',
        pricing: [
          { levelKey: 'aiServices.pricingLevels.standard', priceKey: 'aiServices.pricing.standard', featuresKey: 'aiServices.dataAnalysis.algorithms.descriptive.pricing.standard', ctaKey: 'orderModal.submitButton' },
          { levelKey: 'aiServices.pricingLevels.advanced', priceKey: 'aiServices.pricing.advanced', featuresKey: 'aiServices.dataAnalysis.algorithms.descriptive.pricing.advanced', ctaKey: 'orderModal.submitButton' },
        ],
      },
      {
        id: 'eda',
        nameKey: 'aiServices.dataAnalysis.algorithms.eda.name',
        descriptionKey: 'aiServices.dataAnalysis.algorithms.eda.description',
        pricing: [
          { levelKey: 'aiServices.pricingLevels.standard', priceKey: 'aiServices.pricing.advanced', featuresKey: 'aiServices.dataAnalysis.algorithms.eda.pricing.standard', ctaKey: 'orderModal.submitButton' },
          { levelKey: 'aiServices.pricingLevels.advanced', priceKey: 'aiServices.pricing.premium', featuresKey: 'aiServices.dataAnalysis.algorithms.eda.pricing.advanced', ctaKey: 'orderModal.submitButton' },
        ],
      },
    ],
  },
  {
    id: 'data-mining',
    titleKey: 'aiServices.dataMining.title',
    descriptionKey: 'aiServices.dataMining.description',
    algorithms: [
      {
        id: 'clustering',
        nameKey: 'aiServices.dataMining.algorithms.clustering.name',
        descriptionKey: 'aiServices.dataMining.algorithms.clustering.description',
        pricing: [
            { levelKey: 'aiServices.pricingLevels.standard', priceKey: 'aiServices.pricing.advanced', featuresKey: 'aiServices.dataMining.algorithms.clustering.pricing.standard', ctaKey: 'orderModal.submitButton' },
            { levelKey: 'aiServices.pricingLevels.advanced', priceKey: 'aiServices.pricing.premium', featuresKey: 'aiServices.dataMining.algorithms.clustering.pricing.advanced', ctaKey: 'orderModal.submitButton' },
        ],
      },
      {
        id: 'association-rules',
        nameKey: 'aiServices.dataMining.algorithms.association.name',
        descriptionKey: 'aiServices.dataMining.algorithms.association.description',
        pricing: [
            { levelKey: 'aiServices.pricingLevels.standard', priceKey: 'aiServices.pricing.premium', featuresKey: 'aiServices.dataMining.algorithms.association.pricing.standard', ctaKey: 'orderModal.submitButton' },
            { levelKey: 'aiServices.pricingLevels.advanced', priceKey: 'aiServices.pricing.enterprise', featuresKey: 'aiServices.dataMiningalgorithms.association.pricing.advanced', ctaKey: 'orderModal.submitButton' },
        ],
      },
    ],
  },
  {
    id: 'data-science',
    titleKey: 'aiServices.dataScience.title',
    descriptionKey: 'aiServices.dataScience.description',
    algorithms: [
      {
        id: 'predictive-modeling',
        nameKey: 'aiServices.dataScience.algorithms.predictive.name',
        descriptionKey: 'aiServices.dataScience.algorithms.predictive.description',
        pricing: [
            { levelKey: 'aiServices.pricingLevels.standard', priceKey: 'aiServices.pricing.premium', featuresKey: 'aiServices.dataScience.algorithms.predictive.pricing.standard', ctaKey: 'orderModal.submitButton' },
            { levelKey: 'aiServices.pricingLevels.advanced', priceKey: 'aiServices.pricing.enterprise', featuresKey: 'aiServices.dataScience.algorithms.predictive.pricing.advanced', ctaKey: 'orderModal.submitButton' },
        ],
      },
    ],
  },
  {
    id: 'machine-learning',
    titleKey: 'aiServices.machineLearning.title',
    descriptionKey: 'aiServices.machineLearning.description',
    algorithms: [
      {
        id: 'regression',
        nameKey: 'aiServices.machineLearning.algorithms.regression.name',
        descriptionKey: 'aiServices.machineLearning.algorithms.regression.description',
        pricing: [
            { levelKey: 'aiServices.pricingLevels.standard', priceKey: 'aiServices.pricing.advanced', featuresKey: 'aiServices.machineLearning.algorithms.regression.pricing.standard', ctaKey: 'orderModal.submitButton' },
        ],
      },
      {
        id: 'neural-networks',
        nameKey: 'aiServices.machineLearning.algorithms.neural.name',
        descriptionKey: 'aiServices.machineLearning.algorithms.neural.description',
        pricing: [
            { levelKey: 'aiServices.pricingLevels.standard', priceKey: 'aiServices.pricing.enterprise', featuresKey: 'aiServices.machineLearning.algorithms.neural.pricing.standard', ctaKey: 'orderModal.submitButton' },
        ],
      },
    ],
  },
];
