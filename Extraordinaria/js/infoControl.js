"use strict";
class InfoControl {

    politica(){
        $("#infop").text('Asturias está dividida administrativamente en 78 concejos o municipios. Por debajo del concejo está la figura de la parroquia, que no tiene que coincidir necesariamente con la eclesiástica. Esta figura no ha sido desarrollada legalmente en todos los concejo,aún aunque oficiosamente se emplea en todos. Hay mancomunidades, que consisten en la agrupación de un número de concejos con un fin común. Los principales núcleos de población serían aquellos que conforman la famosa "ciudad astur" (Oviedo-Gijón-Avilés), también para este caso, existen otras denominaciones como el "triángulo astur". Existe otra aglomeración de municipios en el centro de la región conocida como el "ocho astur" serían las ciudades de Oviedo, Gijón, Avilés, Langreo y Mieres. Estos cinco concejos si hacemos un contorno uniéndolos se formaría un ocho de ahí la denominación.');
    }

    topografia(){
        $("#infop").text('Asturias es una región montañosa caracterizada por la situación, al sur, de la cordillera Cantábrica. La Cordillera, que separa la región de la Meseta, recorre la región de Este a Oeste en un tramo de cerca de 200 km en línea recta, con altitudes que van desde algo más de los 1000 m en el este, hasta los 2600 m de los Picos de Europa. Desde el punto de vista del relieve se pueden distinguir la divisoria de aguas Duero-Cantábrico, la propia cordillera Cantábrica (con dos macizos aislados de importancia, Picos de Europa y macizo de Ubiña), las sierras interiores, estribaciones de la cordillera Cantábrica que se adentran en la región y las sierras prelitorales y litorales.');
    }

    hidrografia(){
        $("#infop").text('Los ríos asturianos son cortos y muy caudalosos. Están encajados en profundos valles que se abren paso hacia el mar Cantábrico de sur a norte. Esta peculiaridad permite que muchos sean aprovechados para la generación de energía hidroeléctrica. Los ríos principales son: Sella, Nalón, Narcea y Navia.');
    }
}
var infoControl = new InfoControl();