import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';
import { Select } from '../../ui/select';
import { Separator } from '../../ui/separator';
import { Text } from '../../ui/text';
import { useState } from 'react';
// import {
// 	fontFamilyClasses,
// 	fontFamilyOptions,
// 	fontColors,
// 	backgroundColors,
// 	contentWidthArr,
// 	fontSizeOptions,
// 	defaultArticleState,
// } from '../../constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

// const isOpenAside = clsx({

// })

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggle} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<Text size={31} weight={800}>
						задайте параметры
					</Text>
					<Select selected={null} options={[]} title='шрифт' />
					{/* <RadioGroup
						name=''
						options={[]}
						selected={}
						title='размер шрифта'/> */}
					<Select selected={null} options={[]} title='цвет шрифта' />
					<Separator />
					<Select selected={null} options={[]} title='цвет фона' />
					<Select selected={null} options={[]} title='ширина контента' />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
