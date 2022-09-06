import {makeAutoObservable} from "mobx";

class DeviceStore{
    constructor() {
        this._types=[
            {id: 1, name: 'Ноутбуки'},
            {id: 2, name: 'Перфораторы'},
            {id: 3, name: 'Телефоны'},
            {id: 4, name: 'Телевизоры'}
        ]
        this._brands=[
            {id: 1, name: 'MSI'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Xiaomi'},
            {id: 4, name: 'Asus'},
        ]
        this._devices=[
            {id: 1, name: 'MSI Topchik', price: 90000, raiting: 5, img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'},
            {id: 2, name: 'MSI Kot', price: 10000, raiting: 5, img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'},
            {id: 3, name: 'iPerfarator Man', price: 15000, raiting: 5, img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'},
            {id: 4, name: 'iPerfecto', price: 31000, raiting: 5, img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'},
            {id: 5, name: 'iPerfecto', price: 31000, raiting: 5, img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'},
            {id: 6, name: 'iPerfecto', price: 31000, raiting: 5, img: 'https://static.1k.by/images/productsimages/ip/big/pp0/a/4604449/i78c456cf4.jpg'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}

export default DeviceStore;