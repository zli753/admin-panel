import React from 'react';
import {Card} from 'react-bootstrap';
import * as S from '../Card.styles';

const Card1 = props =>{
    const {
        font={
            header: '',
            menu: ''
        },

        card1Items=[]
    } =props;



    const card1ItemsJSX = card1Items.map((item, index)=>{
        return (
            <S.eachCard>
                <Card key={index}>
                    <Card.Body>
                        <S.result>
                            <div className='row'>
                                <div className='col'>
                                    <S.Icon src={item.icon}/>
                                </div>
                                <div className='col'>
                                    <Card.Title>
                                        <S.Header1 font={font.menu}>{item.name}</S.Header1>
                                        <S.Header2 font={font.menu}>{item.status}</S.Header2>
                                    </Card.Title>
                                </div>
                            </div>
                        </S.result>
                        <Card.Text>
                            <S.status>{item.info}</S.status>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </S.eachCard>
        )
    })



    return (
        <S.Card>

            {card1ItemsJSX}

        </S.Card>
    );
};

export default Card1;