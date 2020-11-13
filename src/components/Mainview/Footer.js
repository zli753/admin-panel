import React from 'react';
import * as S from './Footer.styles';

const Footer=props =>{

    const {
        font={
            header: '',
            menu: ''
        }
    } =props;

    return(
        <S.footer>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className='col-md-1'>
                            <S.status font={font.menu} href="/">Home</S.status>
                        </div>
                        <div className='col-md-1'>
                            <S.status font={font.menu} href="/">Company</S.status>
                        </div>
                        <div className='col-md-1'>
                            <S.status font={font.menu} href="/">Portfolio</S.status>
                        </div>
                        <div className='col-md-1'>
                            <S.status font={font.menu} href="/">Blog</S.status>
                        </div>
                        <div className='col-md-8'>
                            <div className="footer-bottom">
                                <S.status2 font={font.menu} className="ml-auto">
                                    © 2020 StealthRever, all rights reserved
                                </S.status2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </S.footer>
    );
}

export default Footer;