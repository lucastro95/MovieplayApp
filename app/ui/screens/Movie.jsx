import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../styles/RootColors';

import Title from '../components/movie/Title';
import Header from '../components/movie/Header';
import Information from '../components/movie/Information';
import Actions from '../components/movie/Actions';
import { useSelector } from 'react-redux';
import I18n from '../../assets/strings/l18n';
import moviesWS from '../../networking/api/endpoints/moviesWS';
import Loading from '../components/common/Loading';
import ErrorModal from '../components/common/ErrorModal';

const Movie = ({ route }) => {
  const { id } = route.params;
  const user = useSelector(state => state.user.id);
  const language = I18n.locale;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [noConnection, setNoConnection] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await moviesWS.getMovieById({ movieId: id, userId: user, language });
        setMovie(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setErrorVisible(true);
        if (error.message.includes("Network Error")) {
          setNoConnection(true);
        } else {
          setNoConnection(false);
        }
      }
    };

    fetchData();
  }, [id, user, language, refresh]);

  const handleCloseErrorModal = () => {
    setErrorVisible(false);
    setNoConnection(false);
  };

  const handleRefresh = () => {
    setRefresh(prev => !prev);
  };

  return (
    <>
      {loading ? <Loading /> :
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <ErrorModal
              visible={errorVisible}
              noconnection={noConnection}
              onClose={handleCloseErrorModal}
            />
            {movie && (
              <>
                <Header movie={movie} />
                <Title movie={movie} />
                <Actions 
                  movie={movie} 
                  user={user} 
                  setErrorVisible={setErrorVisible} 
                  setNoConnection={setNoConnection} 
                  onRefresh={handleRefresh}
                />
                <Information movie={movie} />
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
});

export default Movie;
