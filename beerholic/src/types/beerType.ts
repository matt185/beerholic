interface BoilVolume {
    value: number
    unit: string
}
interface Amount{
    value: number
    unit: string
}

interface Malt{
    name: string
    amount: Amount
}

interface Hop{
    add:string
    amount:Amount
    attribute: string
    name:string
}
interface Ingredients{
    malt: Malt[]
    hops: Hop[],
    yeast: string
}
interface MashTemp {
    duration: number
    temp: Amount
}

interface Method{
    mash_temp: MashTemp[]
    fermentation: Amount
    twist: null
}

export interface Beer{
    abv: number
    attenuation_level: number
    boil_volume: BoilVolume
    brewers_tips: string
    contributed_by: string
    description: string
    ebc: number
    first_brewed:string
    food_pairing: string[]
    ibu: number
    id:number
    image_url:string
    ingredients:Ingredients
    method:Method 
    name:string
    ph:number
    srm:number
    tagline:string
    target_fg:number
    target_og:number
    volume:Amount
}

export interface BeersInitialState {
    beers: Beer[]|undefined
    beer:Beer[]|undefined
}