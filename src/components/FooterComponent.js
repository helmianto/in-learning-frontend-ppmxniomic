import React, { Component } from 'react';
import { Footer } from 'react-materialize';

const FooterComponent = () => {
    return (
        <>
            <Footer
                className="example indigo darken-3"
                copyrights="Copyright 2021 In Learning"
                links={<ul><li><a className="grey-text text-lighten-3" href="#!">Tentang Kami</a></li><li><a className="grey-text text-lighten-3" href="#!">Hubungi Kami</a></li><li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li></ul>}
                // moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
            >
                <h5 className="white-text">
                    In Learning
                </h5>
                <p className="grey-text text-lighten-4">
                    Pondok Raden Patah Blok M-3 RT 02 RW 04, Des. Sriwulan, <br/> Kec. Sayung, Kab. Demak, <br/> Jawa Tengah 59563
                </p>
            </Footer>
        </>
    );
}

export default FooterComponent;