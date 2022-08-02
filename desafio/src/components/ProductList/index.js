import { useEffect, useState } from "react";
import { api } from "../../service/api";
import Product from "../Product";
import Search from "../Search";
import * as S from './styles';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        async function loadProduct() {
            const response = await api.get('/produtos');
            setProducts(response.data);
        }

        loadProduct()
    }, []);

    return (
        <>
            <S.ContainerSearch>
                <Search type="text" placeholder="Buscar podutor" onChange={(e) => setSearch(e.target.value)} />
            </S.ContainerSearch>
            <S.Container>
                {products.filter((val) => {
                    if (search === "") {
                        return val;
                    } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                        return val;
                    }
                }).map((val, key) => <Product avatar={val.avatar} name={val.name} desciption={val.desciption} price={val.price} key={val.id} />)}
            </S.Container>
        </>
    )
}