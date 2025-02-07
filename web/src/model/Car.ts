export interface Car {
	carId: number,
	carName: string
	carClass: string,
	fuelMax: number,
	bop: Bop
}

interface Bop {
	powerAdjust: number,
	fuel: number,
	display: true
}
