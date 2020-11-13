import React from 'react';
import {Card} from 'react-bootstrap';
import * as S from '../Card.styles';


const Card2 = props => {
    const {
        font = {
            header: '',
            menu: ''
        },

        userBehavior={},
        emailStat={}
    } = props;

    return(
        <S.Card2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card h-100">
                            <Card border="light">
                                <Card.Body>
                                    <S.result>
                                        <Card.Title>{userBehavior.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{userBehavior.status}</Card.Subtitle>
                                        <S.ImgC21 src={userBehavior.img}/>
                                    </S.result>
                                    <Card.Text>
                                        <S.status>{userBehavior.info}</S.status>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card h-100">
                            <Card border="light">
                                <Card.Body>
                                    <S.result>
                                        <Card.Title>{emailStat.name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{emailStat.status}</Card.Subtitle>
                                        <S.ImgC21 src={emailStat.img}/>
                                    </S.result>
                                    <Card.Text>
                                        <S.status>{emailStat.info}</S.status>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </S.Card2>


    );

}

export default Card2;