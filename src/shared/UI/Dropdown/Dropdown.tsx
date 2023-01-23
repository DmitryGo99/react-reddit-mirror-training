import React, {useRef} from 'react';
import styles from './dropdown.css';
import {DropdownBtn} from "../../CardsList/Card/TopBlock/InfoBlock/DropdownBtn";
import ReactDOM from "react-dom";
import {CommentPost} from "../../Post/CommentPost";
import {BlockDropdown} from "../../CardsList/Card/BlockDropdown";

interface IDropdownProps {
	button?: React.ReactNode;
	children?: React.ReactNode;
}

export function Dropdown({button, children}: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
	const node = document.querySelector('#dropdown_root')
	if (!node) return null
	const ref = useRef<HTMLDivElement>(null);

	let positionDropdownTop: any = ref.current?.getBoundingClientRect().top
	let positionDropdownLeft: any = ref.current?.getBoundingClientRect().left
	let windowWidth = window.innerWidth
	let blockDropdownPositionTop;
	let blockDropdownPositionLeft;

	if (windowWidth >= 1200) {
		blockDropdownPositionTop = positionDropdownTop + window.scrollY + 100;
		blockDropdownPositionLeft = positionDropdownLeft + window.scrollX;
	}

	if (windowWidth >= 1024 && windowWidth < 1200) {
		blockDropdownPositionTop = positionDropdownTop + window.scrollY + 100;
		blockDropdownPositionLeft = positionDropdownLeft + window.scrollX - 50;
	}

	if (windowWidth < 1024) {
		blockDropdownPositionTop = positionDropdownTop + window.scrollY + 45;
		blockDropdownPositionLeft = positionDropdownLeft + window.scrollX - 62;
	}

	return (
		<div className={styles.container}>
			<div ref={ref} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
				<DropdownBtn iaAt={isDropdownOpen}/>
			</div>
			{isDropdownOpen && (
				<div className={styles.listContainer}>
					<div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
						<BlockDropdown positionTop={blockDropdownPositionTop}
									   positionRight={blockDropdownPositionLeft}/>
					</div>
				</div>
			)}
		</div>
	);
}
