import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{

    render() {
        return(
            <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <ul class="list-inline text-center">
                            <li class="list-inline-item"><a href="https://www.instagram.com/chinese.association.linton/" target="_blank" rel="noopener noreferrer"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a></li>
                            <li class="list-inline-item"><a href="https://www.facebook.com/LUC-Chinese-Association-%E6%9E%97%E7%99%BB%E5%8D%8E%E6%96%87%E5%AD%A6%E4%BC%9A-375021519914630" target="_blank" rel="noopener noreferrer"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a></li>
                            <li class="list-inline-item"><a href="mailto:chineseasscociation@ktg.edu.my?Subject=林登华文学会" target="_top" rel="noopener noreferrer"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i></span></a></li>
                        </ul>
                        <p class="text-muted copyright">Copyright&nbsp;©&nbsp;<a href="https://www.facebook.com/LUC-Chinese-Association-%E6%9E%97%E7%99%BB%E5%8D%8E%E6%96%87%E5%AD%A6%E4%BC%9A-375021519914630/" target="_blank" rel="noopener noreferrer">LUC Chinese Association 林登华文学会&nbsp;</a>2020</p>
                        <p className="">Developed by <a href="https://hovahyii.github.io/portfolio-v2/" target="_blank" rel="noopener noreferrer">Hovah</a> Together With <a href="https://hovahyii.github.io/portfolio-v2/" target="_blank" rel="noopener noreferrer">Linton IET on Campus</a> </p> 
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer