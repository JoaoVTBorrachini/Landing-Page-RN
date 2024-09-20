import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles'; 

export default function LandingPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>GoodToGo</Text>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Crie sua conta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Economize e ajude a reduzir o desperdício!</Text>
        <Text style={styles.heroSubtitle}>Compre produtos próximos do vencimento por preços incríveis.</Text>
        <TouchableOpacity style={styles.discoverButton}>
          <Text style={styles.discoverButtonText}>Descubra agora</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O que é o GoodToGo?</Text>
        <Text style={styles.sectionText}>
          O GoodToGo conecta padarias, mercados e mercearias a consumidores que desejam economizar e reduzir o desperdício de alimentos.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Como funciona?</Text>
        <View style={styles.featureBox}>
          <Text>Anuncie seus produtos.</Text>
        </View>
        <View style={styles.featureBox}>
          <Text>Encontre promoções exclusivas.</Text>
        </View>
        <View style={styles.featureBox}>
          <Text>Compre com facilidade.</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 *GoodToGo*. Todos os direitos reservados.</Text>
      </View>
    </ScrollView>
  );
}
