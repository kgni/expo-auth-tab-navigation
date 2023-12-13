import { StyleSheet, TextStyle } from 'react-native';

import { AppTextVariants, FontWeights } from './AppText.utils';

const baseTextStyles: TextStyle = {
	fontSize: 16,
	color: '#000000',
};

export const getFontWeightStyles = (variant?: FontWeights) => {
	switch (variant) {
		case 'regular':
			return 'Poppins-Regular';
		case 'medium':
			return 'Poppins-Medium';
		case 'bold':
			return 'Poppins-Bold';
		default:
			return 'Poppins-Bold';
	}
};

export const appTextStyles = StyleSheet.create({
	heading: {
		...baseTextStyles,
		fontSize: 32,
		fontFamily: getFontWeightStyles('bold'),
	},
	body: {
		...baseTextStyles,
		fontSize: 16,
		fontFamily: getFontWeightStyles('regular'),
	},
	label: {
		...baseTextStyles,
		fontSize: 12,
		fontWeight: 'bold',
		fontFamily: getFontWeightStyles('bold'),
	},
});

export const getTextStylesByVariant = (variant: AppTextVariants) => {
	switch (variant) {
		case 'heading':
			return appTextStyles.heading;
		case 'body':
			return appTextStyles.body;
		case 'label':
			return appTextStyles.label;
		default:
			return appTextStyles.body;
	}
};
