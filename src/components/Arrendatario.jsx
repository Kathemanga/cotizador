import React, { useEffect, useState } from "react";
import { Input, Select } from 'form-tool';
import { Container, Div, P, Box, Button, Cards, Cards2 } from './styled'
import { useFormTools } from "form-tool";
 
const Arrendatario = () => {
    const [Show, setShow] = useState(false)
    const change = (params) => {
        setShow(params)
    }
    const Array = [
        {Asalariado:'1', name:"Asalariado"},
        {Asalariado:'2', name:"Independiente"}
    ]
    const newArray = [
        {id:'1', name:"Si"},
        {id:'2', name:"No"}
    ]
    const [handleChange, handleSubmit, { dataForm, setForcedData, errorForm }] = useFormTools()
    const [count, setCount] = useState();
    const [calculate, setCalculate] = useState();
 
    useEffect (()=> {
        let propietario = 0;
        if (dataForm?.canon && dataForm?.administracion && dataForm?.serviciosPublicos ) { 
            propietario = parseInt(dataForm.administracion) + parseInt(dataForm.canon) + parseInt(dataForm.serviciosPublicos)
        }
        if (dataForm?.administracion && dataForm?.serviciosPublicos && !dataForm?.canon) { 
            propietario = 0
        }
        if (!dataForm?.administracion && !dataForm?.serviciosPublicos && dataForm?.canon ) { 
            propietario = parseInt(dataForm.canon)
        }
        if (dataForm?.administracion && !dataForm?.serviciosPublicos && dataForm?.canon ) { 
            propietario = parseInt(dataForm.canon) +  parseInt(dataForm.administracion)
        }
        if (!dataForm?.administracion && dataForm?.serviciosPublicos && dataForm?.canon ) { 
            propietario = parseInt(dataForm.canon) +  parseInt(dataForm.serviciosPublicos)
        }
       
        let objeto = {
            total: propietario,
            fianzaAnual: `$ ${propietario * 0.50}` ,
            fianzaMensual: `$ ${propietario / parseInt(dataForm?.tiempoMeses) * 0.60 }`,
        }
        setCount(objeto)
    },[dataForm?.canon, dataForm?.administracion, dataForm?.serviciosPublicos, dataForm?.tiempoMeses])

    useEffect (()=>{
        let arrendatario = 0;
        if (dataForm?.aCanon && dataForm?.aAdministracion ) { 
            arrendatario = parseInt(dataForm.aAdministracion) + parseInt(dataForm.aCanon) 
        }
        if (!dataForm?.aAdministracion && dataForm?.aCanon ) { 
            arrendatario = parseInt(dataForm.aCanon)
        }

        let objeto2 = {
            aTotal: arrendatario,
            aEstudio:arrendatario <= 1000000 && arrendatario >0 ? 50000 : arrendatario*0.05 ,
            aDerechosFianza: dataForm.id==='1' ? arrendatario * 0.10 : dataForm.id==='2' && dataForm.Asalariado==='1' ? arrendatario * 0.30 : dataForm.id==='2' && dataForm.Asalariado==='2' ? arrendatario * 0.50 : 0
        }
    
        setCalculate(objeto2)
    },[dataForm?.aCanon, dataForm?.aAdministracion, dataForm?.id, dataForm?.Asalariado])
 
    return (
        <Container>
            <Div>
                <P>QUIEN ERES</P>
                <Box>
                    <Button onClick={() => change(false)}>PROPIETARIO</Button>
                    <Button onClick={() => change(true)}>ARRENDATARIO</Button>
                </Box>
                {!Show ?
                    (
                        <>
                            <Cards>
                                <Input
                                    title="CANON :"
                                    type="text"
                                    name='canon'
                                    onChange={handleChange}
                                    value={dataForm?.canon}
                                    cWidth={'97%'}
                                    numeric
                                    range={[3,15]}
                                    format
                                />
                                <Input
                                    title="ADMINISTRACIÓN :"
                                    type="text"
                                    name='administracion'
                                    onChange={handleChange}
                                    value={dataForm?.administracion}
                                    cWidth={'97%'}
                                    numeric
                                    range={[3,15]}
                                    format
                                />
                                <Input
                                    title="SERVICIOS PÚBLICOS :"
                                    type="text"
                                    name='serviciosPublicos'
                                    onChange={handleChange}
                                    value={dataForm?.serviciosPublicos}
                                    cWidth={'97%'}
                                    numeric
                                    range={[3,15]}
                                    format
                                />
                                <Input
                                    title="TIEMPO (MESES) :"
                                    name='tiempoMeses'
                                    onChange={handleChange}
                                    value={dataForm?.tiempoMeses}
                                    cWidth={'97%'}
                                />
                                <Input
                                    title="TOTAL :"
                                    disabled
                                    type="text"
                                    name='total'
                                    value={count?.total}
                                    cWidth={'97%'}
                                    numeric
                                    range={[3,15]}
                                    format
                                />
                            </Cards>
                            <P>COTIZACIÓN</P>
                            <Cards2>
                                <Input
                                    title="FIANZA ANUAL :"
                                    disabled
                                    // type="number"
                                    name='fianzaAnual'
                                    value={count?.fianzaAnual}
                                    cWidth={'97%'}
                                />
                                <Input
                                    title="FIANZA MENSUAL :"
                                    disabled
                                    // type="number"
                                    name='fianzaMensual'
                                    onChange={handleChange}
                                    value={count?.fianzaMensual}
                                    cWidth={'97%'}
                                />
                            </Cards2>
                        </>
                    ) :
                    (<>
                        <Cards height={'60vh'}>
                                <Input
                                    title="CANON :"
                                    type="text"
                                    name='aCanon'
                                    onChange={handleChange}
                                    value={dataForm?.aCanon}
                                    cWidth={'97%'}
                                    numeric
                                    range={[3,15]}
                                    format
                                />
                                <Input
                                    title="ADMINISTRACIÓN :"
                                    type="text"
                                    name='aAdministracion'
                                    onChange={handleChange}
                                    value={dataForm?.aAdministracion}
                                    cWidth={'97%'}
                                    numeric
                                    range={[3,15]}
                                    format
                                />
                                <Input
                                    title="TIEMPO (MESES) :"
                                    type="number"
                                    name='aTiempomeses'
                                    onChange={handleChange}
                                    value={dataForm?.aTiempomeses}
                                    cWidth={'97%'}
                                />
                                <Input
                                    title="TOTAL :"
                                    type="text"
                                    name='aTotal'
                                    onChange={handleChange}
                                    value={calculate?.aTotal}
                                    cWidth={'97%'}
                                    numeric
                                    range={[3,15]}
                                    format
                                />
                                 <Select
                                        title="ASALARIADO O INDEPENDIENTE"
                                        name='Asalariado'
                                        required
                                        nameValue='name'
                                        data={Array}
                                        val={dataForm?.Asalariado}
                                        // error={errorForm?.Id}
                                        onSelect={handleChange}
                                        cWidth={'60%'}
                                    />
                                   <Select
                                        title="TIENE CODEUDOR SI / NO"
                                        name='id'
                                        required
                                        nameValue='name'
                                        data={newArray}
                                        val={dataForm?.id}
                                        // error={errorForm?.pjId}
                                        onSelect={handleChange}
                                        cWidth={'60%'}
                                    />
                                <Input
                                    title="ESTUDIO :"
                                    type="text"
                                    name='aEstudio'
                                    onChange={handleChange}
                                    value={calculate?.aEstudio}
                                    cWidth={'97%'}
                                    numeric
                                    range={[3,15]}
                                    format
                                />
                                 <Input
                                    title="DERECHOS DE FIANZA"
                                    type="text"
                                    name='aDerechosFianza'
                                    onChange={handleChange}
                                    value={calculate?.aDerechosFianza}
                                    cWidth={'97%'}
                                    numeric
                                    range={[3,15]}
                                    format
                                />
                                <Input
                                    title="TOTAL A PAGAR"
                                    type="text"
                                    name='totalApagar'
                                    onChange={handleChange}
                                    value={calculate?.aEstudio + calculate?.aDerechosFianza }
                                    cWidth={'97%'}
                                    numeric
                                    range={[3,15]}
                                    format
                                />
                        </Cards>
                    </>)
                }
            </Div>
        </Container>
 
    );
}
export default Arrendatario;