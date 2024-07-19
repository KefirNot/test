export type DataType = {
    name: string;
    description: string;
    characteristics: CharacteristicType[];
};

export type CharacteristicType = {
    speed: number;
    force: number;
    engineAmperage: number;
}