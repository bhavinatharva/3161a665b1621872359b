import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

interface Props {
    location_name: string,
    time: string,
    testId: string
}
const CurrentLocationView = ({ location_name, time, testId }: Props) => {
    return (
        <View testID={testId} style={[styles.container, styles.viewRowCenter]}>
            <View style={styles.viewAvtar} testID="list-current-icon">
                <Text style={styles.txtAvtar}>NA</Text>
            </View>
            <View style={styles.viewFlex}>
                <Text testID='list-current-name' style={[styles.txtItem, { marginBottom: 10 }]} numberOfLines={1}>{location_name}</Text>
                <Text testID='list-current-time' style={[styles.txtItem, { color: 'grey', fontSize: 15 }]}>{time}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { paddingHorizontal: 15 },
    viewRowCenter: { flexDirection: 'row', alignItems: 'center' },
    viewAvtar: { height: 40, width: 40, borderRadius: 20, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', marginEnd: 10 },
    txtAvtar: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    viewFlex: { flex: 1 },
    txtItem: {
        fontSize: 16,
        color: 'black'
    }
})
export default CurrentLocationView