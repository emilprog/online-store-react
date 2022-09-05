import {makeAutoObservable} from "mobx";

class DeviceStore{
    constructor() {
        this._types=[
            {id: 1, name: 'Ноутбуки'},
            {id: 1, name: 'Перфораторы'}
        ]
        this._brands=[
            {id: 1, name: 'MSI'},
            {id: 1, name: 'Apple'}
        ]
        this._devices=[
            {id: 1, name: 'MSI Topchik', price: 90000, raiting: 5, img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'},
            {id: 2, name: 'MSI Kot', price: 10000, raiting: 5, img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'},
            {id: 3, name: 'iPerfarator Man', price: 15000, raiting: 5, img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'},
            {id: 4, name: 'iPerfecto', price: 31000, raiting: 5, img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    get Types(){
        return this._types
    }
    get Brands(){
        return this._brands
    }
    get Devices(){
        return this._devices
    }
}

export default DeviceStore;