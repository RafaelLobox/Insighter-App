import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../components/Colors';

export default function TermosScreen(props) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white }}>
      
        <View style={styles.header}>
            <Icon
              onPress={() =>{
                props.navigation.navigate("Home");
              }}
            name='keyboard-backspace'  size={25}   />
            <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 12}}>Termos de Uso</Text>
        </View>
        <ScrollView>
          <Text style={styles.title}>Termos e Condições de Uso:</Text>
          <Text style={styles.caption}>Seja bem-vindo ao Insighter!</Text>
          <Text style={styles.caption}>Estes termos e condições descrevem as regras de uso do site da empresa Insighter, localizado no endereço https://play.google.com/store/apps/details?id=com.Insighter.app.</Text>
          <Text style={styles.caption}>Ao acessar este site, consideramos que você está de acordo com os termos e condições abaixo. Não continue a usar o Insighter caso você discorde dos termos e condições descritos neste contrato.</Text>
          <Text style={styles.title}>Cookies:</Text>
          <Text style={styles.caption}>O site usa cookies para ajudar na personalização da sua experiência na internet. Ao acessar o site Insighter, você concorda com o uso dos cookies requeridos.</Text>
          <Text style={styles.caption}>Cookies são arquivos de texto inseridos no seu disco rígido por um servidor de página web. Os cookies não têm permissão para executar programas ou transferir vírus para seu computador. Os cookies são associados exclusivamente a você e só podem ser lidos pelo servidor web do domínio que emitiu o cookie.</Text>
          <Text style={styles.caption}>Nós podemos usar cookies para coletar, armazenar ou rastrear informações para finalidades estatísticas e mercadológicas do nosso site. Você tem a opção de aceitar ou rejeitar os cookies opcionais. Existem alguns cookies obrigatórios, que são necessários para o funcionamento de nosso site. Esses cookies obrigatórios são requerem seu consentimento. Por favor, tenha em mente que, ao aceitar os cookies obrigatórios, você também estará aceitando cookies de terceiros, que podem ser usados por terceiros caso você utilize serviços fornecidos por eles em nosso site – por exemplo, uma janela de reprodução de vídeo fornecida por empresas terceiras e integrada ao nosso site.</Text>
          <Text style={styles.title}>Licença:</Text>
          <Text style={styles.caption}>Exceto em casos em que for indicado o contrário, Insighter e seus licenciados têm direito à propriedade intelectual de todo o material postado no Insighter. Todos os direitos à propriedade intelectual são reservados.</Text>
          <Text style={styles.caption}>Você não tem permissão para:</Text>
          <Text style={styles.license}>- Copiar ou republicar materiais do Insighter</Text>
          <Text style={styles.license}>- Vender, alugar ou sublocar materiais do Insighter</Text>
          <Text style={styles.license}>- Reproduzir, duplicar ou copiar materiais do Insighter</Text>
          <Text style={styles.license}>- Redistribuir conteúdos do Insighter</Text>
          <Text style={styles.caption}>Não será permitido o uso ou a publicação de links para o logo e/ou outros elementos visuais da Insighter sem um acordo de licença para o uso da marca registrada.</Text>
          <Text style={styles.title}>Responsabilização pelo Conteúdo:</Text>
          <Text style={styles.caption}>Não seremos responsabilizados legalmente por qualquer conteúdo que apareça no seu Site. Você concorda em nos proteger e nos defender contra todas as acusações que forem levantadas no seu Site. Nenhum link deve aparecer em qualquer Site que possa ser interpretado como difamatório, obsceno, criminoso, ou que infrinja, viole ou defenda a violação dos direitos de terceiros.</Text>
          <Text style={styles.title}>Reserva de Direitos:</Text>
          <Text style={styles.caption}>Reservamos nosso direito de solicitar que você remova todos os links ou quaisquer links que redirecionem para nosso site. Você concorda em remover imediatamente todos os links para nosso site assim que a remoção for solicitada. Também reservamos nosso direito de corrigir e alterar estes termos e condições a qualquer momento. Ao publicar continuadamente links para nosso site, você concorda a seguir estes termos e condições sobre links.</Text>

          <Text style={styles.title}>Remoção de links postados em nosso site:</Text>
          <Text style={styles.caption}>Se você encontrar qualquer link em nosso Site que seja de qualquer forma ofensivo, você tem a liberdade de entrar em contato conosco e nos informar do problema a qualquer momento. Vamos considerar as solicitações de remoção de links, mas não somos obrigados a remover quaisquer links do nosso site nem a responder diretamente à sua solicitação.</Text>
          <Text style={styles.caption}>Nós não garantimos que as informações continas neste site são corretas. Nós não garantimos integralidade ou exatidão do conteúdo. Não garantimos que o site se manterá disponível ou que o material do site se manterá atualizado.</Text>

          <Text style={styles.title}>Declaração de Isenção de Responsabilidade:</Text>
          <Text style={styles.caption}>No máximo possível permitido por lei, nós excluímos todas as representações, garantias e condições relativas ao nosso site e ao uso deste site. Nada nesta declaração de isenção de responsabilidade vai:</Text>
          <Text style={styles.license}>- limitar ou excluir nossa responsabilidade ou sua responsabilidade por mortes ou danos pessoais;</Text>
          <Text style={styles.license}>- limitar ou excluir nossa responsabilidade ou sua responsabilidade por fraudes ou deturpações fraudulentas;</Text>
          <Text style={styles.license}>- limitar nossa responsabilidade ou sua responsabilidade de quaisquer maneiras que não forem permitidas sob a lei;</Text>
          <Text style={styles.license}>- excluir quaisquer responsabilidades suas ou nossas que não podem ser excluídas de acordo com a lei aplicável.</Text>

          <Text style={styles.caption}>As limitações e proibições de responsabilização listadas nesta Seção e em outras partes desta declaração: (a) estão sujeitas ao parágrafo anterior; e (b) regem todas as responsabilizações que surgirem sob a declaração, incluindo responsabilizações surgidas em contrato, em delitos e em quebra de obrigações legais.</Text>
          <Text style={styles.caption}>Enquanto o site e as informações e serviços do site forem oferecidos gratuitamente, nós não seremos responsáveis por perdas e danos de qualquer natureza.</Text>

        </ScrollView>
        <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
      },
      title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 25,
      }, 
      caption:{
        color: COLORS.grey,
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 15,
      },
      license:{
        color: COLORS.grey,
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 14,
        marginRight: 14,
        marginTop: 8,
      },
});