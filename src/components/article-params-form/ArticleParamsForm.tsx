import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';
import { Select } from '../../ui/select';
import { RadioGroup } from '../../ui/radio-group';
import { Separator } from '../../ui/separator';
import { Text } from '../../ui/text';
import { useState } from 'react';
import {
	// fontFamilyClasses,
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	// defaultArticleState,
} from '../../constants/articleProps';
import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isSelectFont, setIsSelectFont] = useState(fontFamilyOptions[0]);
	const [isSelectFontSize, setIsSelectFontSize] = useState(fontSizeOptions[0]);
	const [isSelectFontColor, setIsSelectFontColor] = useState(fontColors[0]);
	const [isSelectBackgroungColor, setIsSelectBackgroungColor] = useState(
		backgroundColors[0]
	);
	const [isSelectcontentWidth, setIsSelectcontentWidth] = useState(
		contentWidthArr[0]
	);

	const toggle = () => {
		setIsFormOpen(!isFormOpen);
	};

	return (
		<>
			<ArrowButton isOpen={isFormOpen} onClick={toggle} />
			<aside
				className={clsx(styles.container, isFormOpen && styles.container_open)}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						задайте параметры
					</Text>

					<Select
						selected={isSelectFont}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={setIsSelectFont}
					/>

					<RadioGroup
						name='radio'
						options={fontSizeOptions}
						selected={isSelectFontSize}
						title='размер шрифта'
						onChange={setIsSelectFontSize}
					/>

					<Select
						selected={isSelectFontColor}
						options={fontColors}
						title='цвет шрифта'
						onChange={setIsSelectFontColor}
					/>

					<Separator />

					<Select
						selected={isSelectBackgroungColor}
						options={backgroundColors}
						title='цвет фона'
						onChange={setIsSelectBackgroungColor}
					/>

					<Select
						selected={isSelectcontentWidth}
						options={contentWidthArr}
						title='ширина контента'
						onChange={setIsSelectcontentWidth}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
