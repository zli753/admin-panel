import React from 'react';
import * as S from './ResetPass.styles';
import background from './background.jpg';
import profile from './profile.jpeg';


const ResetPass = props => {
    const {
        font={
            header: '',
            menu: ''
        },
    } =props;

    return(

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <S.wrapper>
                        <S.formwrapper>
                            <S.h1 font={font.menu}>Reset Passowrd</S.h1>
                            <S.form noValidate>

                                <div className="email">
                                    <S.label font={font.menu} htmlFor="email">Email</S.label>
                                    <S.input
                                        font={font.menu}
                                        type="text"
                                        className=""
                                        placeholder="Email"
                                        name="email"
                                        noValidate
                                    />
                                </div>
                                <div className="password">
                                    <S.label font={font.menu} htmlFor="password">Original Password</S.label>
                                    <S.input
                                        font={font.menu}
                                        type="text"
                                        className=""
                                        placeholder="original password"
                                        name="password"
                                        noValidate
                                    />
                                </div>
                                <div className="password_new">
                                    <S.label font={font.menu} htmlFor="password_new">New Password</S.label>
                                    <S.input
                                        font={font.menu}
                                        type="text"
                                        className=""
                                        placeholder="new passowrd"
                                        name="password_new"
                                        noValidate
                                    />
                                </div>
                                <div className="password_confirm">
                                    <S.label font={font.menu} htmlFor="password_confirm">Confirm Password</S.label>
                                    <S.input
                                        font={font.menu}
                                        type="text"
                                        className=""
                                        placeholder="new passowrd"
                                        name="password_confirm"
                                        noValidate
                                    />
                                </div>
                                <div className="change_password">
                                    <S.button>
                                        <button type="button" className="btn btn-outline-info">Update Password</button>
                                    </S.button>
                                </div>

                            </S.form>
                        </S.formwrapper>
                    </S.wrapper>
                </div>
                <div className="col-md-4">
                    <S.wrapper>
                        <div className='card text-center'>

                                <div>
                                    <S.ImgC21 src={background} alt={'Image 1'}/>
                                </div>

                            <S.imgContainer>
                                <S.imgRound src={profile}/>
                            </S.imgContainer>
                            <div className="card-body text-dark">
                                <S.h2 className="card-title">Micheal Johnson</S.h2>
                                <S.acount className="card-text text-secondary">md43985u0</S.acount>

                            </div>
                        </div>
                    </S.wrapper>
                </div>
            </div>
        </div>



    );

}

export default ResetPass;