// import React from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';


// const AccountType = (handleSubmit, onSubmit, data) => {
//     return (
//         <View>
//             <Text>Wybierz rodzaj konta</Text>
//             <Text>
//                 Wybierz rodzaj swojego konta. W późniejszym etapie będzie moliwośc zmiany lub dodania innych typów konta.
//             </Text>
//             <View>
//                 <TouchableOpacity onPress={(
//                     handleSubmit((data) => {
//                         onSubmit({ ...data, accountType: 'trener' })
//                     }))}>
//                     <Text>trener</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={(
//                     handleSubmit((data) => {
//                         onSubmit({ ...data, accountType: 'zawodnik' })
//                     }))}>
//                     <Text>zawodnik</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={(
//                     handleSubmit((data) => {
//                         onSubmit({ ...data, accountType: 'kibic' })
//                     }))}>
//                     <Text>kibic</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={(
//                     handleSubmit((data) => {
//                         onSubmit({ ...data, accountType: 'obserwator' })
//                     }))}>
//                     <Text>obserwator</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// export default AccountType;