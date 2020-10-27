import React from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, StyleSheet, Dimensions, View, Image} from 'react-native';




import {Spiegel_News} from '../components';


const news_data =[
    {
        id:0,
        title:'Diese Putin-Vertrauten trifft es',
        description: 'Moskau leugnet weiterhin eine Beteiligung an dem Giftanschlag auf den Kremlkritiker Alexej Nawalny. Jetzt belegt die EU ausgewählte russische Offizielle mit Strafmaßnahmen. Wer sind die sechs Männer aus Putins Umfeld?',
        link: 'https://cdn.prod.www.spiegel.de/images/06aad7b9-286f-443c-baaa-47a0d7d36e1e_w948_r1.77_fpx61.98_fpy44.98.jpg',
    },
    {
        id:1,
        title:'Wer in Deutschland künftig getestet wird',
        description: 'Am Donnerstag tritt die neue Corona-Testverordnung in Kraft. Neu sind darin die Antigen-Schnelltests. Wann kommen sie zum Einsatz? Und wer kann sich testen lassen? Die Übersicht.',
        link: 'https://cdn.prod.www.spiegel.de/images/4d2a35ca-16cb-4ee9-a1ce-d67a2d1ca18c_w948_r1.77_fpx46_fpy45.jpg'
    },
    {
        id:2,
        title:'Russland lässt zweiten Impfstoff zu',
        description: 'Auf "Sputnik V" folgt "EpiVacCorona": Die russischen Behörden haben einen weiteren Impfstoff freigegeben, ein dritter ist laut Präsident Putin bereits in der Entwicklung.',
        link: 'https://cdn.prod.www.spiegel.de/images/6b2558cf-3db4-492f-b1c8-d74b8e01e593_w948_r1.77_fpx62.89_fpy45.jpg'
    },
    {
        id:3,
        title:'EU belegt sechs Vertreter Russlands mit Sanktionen',
        description: 'Weil sie mit dem Giftanschlag auf Alexej Nawalny zu tun haben sollen, hat die EU nach SPIEGEL-Informationen Sanktionen gegen hochrangige russische Beamte beschlossen. Moskau antwortete sofort.',
        link: 'https://cdn.prod.www.spiegel.de/images/e3cf8c4a-ef49-43c1-a8f0-b4121b04cd8a_w948_r1.77_fpx68.6_fpy50.png'
    },
    {
        id:4,
        title:'Gesetz von Ministerin Lambrecht nun doch in "männlicher" Form',
        description: 'Das Justizministerium sorgte mit einem Gesetzentwurf für Diskussionen, weil er im generischen Femininum verfasst war. Das Kabinett hat er nun aber mit den üblichen männlichen Formulierungen passiert.',
        link: 'https://cdn.prod.www.spiegel.de/images/2ac5772a-1e62-4e9e-8263-036c1ab977eb_w948_r1.77_fpx48_fpy47.jpg'
    }
];

const top_menu = [
    {
        id:0,
        title: 'Menu',

    },
    {
        id:1,
        title: 'Schlagzeilen',

    },
    {
        id:2,
        title: 'SPIEGEL+',

    },
    {
        id:3,
        title: 'Coranavirus',

    },
    {
        id:4,
        title: 'Politik',

    },
    {
        id:5,
        title: 'Ausland',

    },
    {
        id:6,
        title: 'Panorama',

    },
    {
        id:7,
        title: 'Sport',

    },
    {
        id:8,
        title: 'Wirtschaft',

    },
    {
        id:9,
        title: 'Wissenschahft',

    },
    {
        id:10,
        title: 'Netzwelt',

    },
    {
        id:11,
        title: 'Buchwoche',

    },
    {
        id:12,
        title: 'Leben',

    },
    {
        id:13,
        title: 'Job & Karriere',

    },
    {
        id:14,
        title: 'Wirtschaft',

    },
    {
        id:15,
        title: 'Start',

    },
    {
        id:16,
        title: 'Geschichte',

    },
    {
        id:17,
        title: 'Mobilität',

    },
    {
        id:18,
        title: 'Dein SPIEGEL',

    },
    {
        id:19,
        title: 'Audio',

    },
    {
        id:20,
        title: 'Video',

    },
    {
        id:21,
        title: 'Englisch',

    },
    
]

const schlagzeilen = [

    {
        id:0,
        title: 'Wie die "neue Normalität" an den Schulen unter Druck gerät',

    },
    {
        id:1,
        title: 'Wie groß sind die Umfragezeichen bei Biden und Trump?',

    },
    {
        id:2,
        title: 'Der wütende Kandidat',

    },
    {
        id:3,
        title: 'Wie groß sind die Umfragezeichen bei Biden und Trump?',

    },
    {
        id:4,
        title: "Dann können wir sie auch gleich abschaffen",

    },
    {
        id:5,
        title: 'Ausland',

    },
    {
        id:6,
        title: 'Türkische Lira fällt auf Rekordtief',

    },
    {
        id:7,
        title: 'Sport',

    },
    {
        id:8,
        title: 'Vatikan brüskiert deutsche Laien',

    },
    {
        id:9,
        title: "Wir katapultieren uns in eine Superwarmzeit",

    },
  

]

const Startseite = (props ) => {

    const renderItemData = ({item}) => <Spiegel_News news={item}/>
    
    return (
        <SafeAreaView style={{backgroundColor:'white'}}>  

                

             <View style={styles.logo_view}>


             
                <View style={styles.images}>
                    <Image 
                    style={styles.menu}
                    
                    /> 

                </View>

            <View style={styles.images} >
          
                <Image 
                style={styles.logo} 
                
                />

            </View>

            <View style={styles.images} >

                <Image 
                style={styles.vrt_dots}
                 
                /> 

            </View>
            </View>
            <View style={styles.container} >
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll} >
                
                {
                    top_menu.map(data=>{
                        return(
                                <Text key={data.id} style={styles.top_menu}> {data.title}</Text>
                        )

                    })
                }
                
                </ScrollView>
            </View>


            <View style={styles.container_seilen} >
                <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={styles.scroll_seilen} >

                    
                    
                    <View style={{flexDirection:'row'}}>
                
                {
                    schlagzeilen.map(value=>{
                        return(
                                <Text key={value.id} style={styles.seilen_menu}> {value.title}</Text>
                        )

                    })
                }

                </View>
                
                </ScrollView>
            </View>



            
        <View>
            <FlatList
            keyExtractor={item => item.id.toString()}
            data={news_data}
            renderItem={renderItemData}

            
             />
        </View>

        

      


    </SafeAreaView>
    )
} 

export {Startseite}


const styles = StyleSheet.create({
    top_menu:{
        flex:1,
        paddingRight:10,        
        fontSize: 15,
        
        
    },
    scroll:{
            
        flex:1,        
        position:'absolute',       
        width: Dimensions.get('window').width * 1,
        backgroundColor:'white',
        
    },
    container:{
        height: 30,
    },
   
    logo_view: {
       
        flexDirection:'row',
        backgroundColor:'#E64415',
        marginBottom: 10,
        height: 50,
        justifyContent: 'space-between'
        

        
    },
  
   
    menu:{
        height:50,
        width:40
    },
    vrt_dots:{
        height:50,
        width:40,
        
        
    },
    logo: {
        height: 50
    },
    scroll_seilen:{
        
        height: Dimensions.get('window').height /7,
        
     },
     seilen_menu:{
        marginHorizontal: 50,
        fontSize: 17
     }



})
