import React from 'react'
import "./WhatsAppfixed.css"

const WhatsAppfixed = () => {
    window.addEventListener('scroll', function () {
        var whatsappfixed = document.getElementById('whatsappfixed');
        if (this.window.scrollY > 300) {
            whatsappfixed.classList.add('whatsappfixed-position');
            whatsappfixed.style.display="flex";
            // navbar.style.background = 'white';
        } else {
            whatsappfixed.classList.remove('whatsappfixed-position');
            whatsappfixed.style.display="none";
            // navbar.style.background = '#fbdc00';
        }
    });

    return (
        <div id  = "whatsappfixed" className='whatsappfixed-main-container'>
            <div className='whatsappfixed-sub-container'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="30px" height="30px" role="img" class="styles_whatsapp_icon__fcR5q"><path class="ic-c-whatsapp_svg__ic_c_whatsapp" fill="#BFC8D0" fill-rule="evenodd" d="M6.793 13a5.793 5.793 0 1 0-5.04-2.936L1 13l3.027-.702A5.767 5.767 0 0 0 6.793 13Zm0-.891a4.902 4.902 0 1 0-4.017-2.092l-.44 1.646 1.676-.419a4.88 4.88 0 0 0 2.781.865Z" clip-rule="evenodd"></path><path class="ic-c-whatsapp_svg__ic_c_whatsapp" fill="url(#ic-c-whatsapp_svg__a)" d="M11.759 6.793a4.966 4.966 0 0 1-7.783 4.09l-1.697.424.445-1.668a4.966 4.966 0 1 1 9.035-2.846Z"></path><path classNane="ic-c-whatsapp_svg__ic_c_whatsapp" fill="#fff" fill-rule="evenodd" d="M6.793 12.586a5.793 5.793 0 1 0-5.04-2.936L1 12.586l3.027-.702a5.767 5.767 0 0 0 2.766.702Zm0-.891a4.902 4.902 0 1 0-4.017-2.092l-.44 1.646 1.676-.418a4.88 4.88 0 0 0 2.781.864Z" clip-rule="evenodd"></path><path class="ic-c-whatsapp_svg__ic_c_whatsapp" fill="#fff" d="M5.345 4.104c-.138-.277-.35-.253-.563-.253-.381 0-.976.457-.976 1.308 0 .697.307 1.46 1.342 2.6.999 1.102 2.311 1.672 3.4 1.653 1.09-.02 1.314-.957 1.314-1.274 0-.14-.087-.21-.147-.23-.371-.177-1.056-.51-1.212-.572-.156-.062-.237.022-.287.068-.142.135-.422.532-.518.62-.096.09-.239.045-.298.011-.219-.088-.813-.352-1.286-.81-.585-.568-.62-.763-.73-.936-.088-.14-.023-.225.01-.262.125-.145.3-.37.378-.482.078-.111.016-.28-.022-.386-.16-.454-.295-.834-.405-1.055Z"></path><defs><linearGradient id="ic-c-whatsapp_svg__a" x1="11.138" x2="1.828" y1="3.069" y2="11.759" gradientUnits="userSpaceOnUse"><stop stop-color="#5BD066"></stop><stop offset="1" stop-color="#27B43E"></stop></linearGradient></defs></svg>
                <h4>WhatsApp Us</h4>

            </div>
        </div>
    )
}

export default WhatsAppfixed