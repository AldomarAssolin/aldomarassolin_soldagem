import Card from 'react-bootstrap/Card';
import Cards from '../components/Cards';
import Section from '../components/Section';
import Title_Effect from '../components/TitleEffect';
import Title from '../components/Title_Section';

function Tranning() {
    return (

        <Section>
            <Title
                classes='text-start mb-5'
                title="Formação"
                subtitle="Desenvolvimento através do estudo e da dedicação."
                // eslint-disable-next-line react/jsx-pascal-case
                effect={<Title_Effect />}
            />
            <Cards
                bg="dark"
                cardClasses="text-light mb-3"
                CardHeader="Graduação"
                CardTitle="Análise e Desenvolvimentro de Sistemas"
                CardText="Atuar como consultor, analista, desenvolvedor, prestador de serviços em empresas do setor público, 
                    privado, empresas de Tecnologia da Informação (TI) e de telecomunicações, além de poder atuar no direcionamento, 
                    acompanhamento e validação de softwares."
                CardFooter="Set 2022 até Set 2025"
            >
                <Card.Text className=' w-75 text-end'>
                    CENTRO UNIVERSITÁRIO LEONARDO DA VINCI - UNIASSELVI - Santa Maria - RS
                </Card.Text>
            </Cards>
            <Cards
                bg="secondary"
                cardClasses="text-light mb-3"
                CardHeader="Técnico"
                CardTitle="Técnico em Soldagem"
                CardText="Planejar e coordenar a execução de atividades de soldagem em
                    estruturas metálicas e tubulações industriais, de acordo com a
                    programação da produção; executar a elaboração de projetos;
                    selecionar processos de soldagem, metais de base e consumíveis;
                    executar ensaios para garantir a qualidade dos produtos soldados;
                    "
                CardFooter="Mar 2018 até Dez 2019"
            >
                <Card.Text className=' w-75 text-end'>
                    Colégio Técnico Industrial - Santa Maria - RS
                </Card.Text>
            </Cards>
        </Section>


    );
}

export default Tranning;