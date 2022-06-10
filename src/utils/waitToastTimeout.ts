export const waitToastTimeout = (callback: () => void) => {
	setTimeout(() => {
		callback();
	}, 3100);
};
