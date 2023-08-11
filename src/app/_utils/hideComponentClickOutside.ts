import { RefObject, useEffect } from 'react';

const useOutsideClick = (
	ref: RefObject<HTMLElement>,
	onClose: () => void,
	isModal = false
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				ref.current &&
				!ref.current.contains(event.target as Node) &&
				(!isModal ||
					(event.target as HTMLElement)?.classList.contains(
						'baseModalComponent'
					))
			) {
				onClose();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [ref, onClose, isModal]);
};

export default useOutsideClick;
