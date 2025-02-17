import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Font from './../components/Font';

const TopicCheck = ({ navigation }) => {
  const [topicCheck, setTopicCheck] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onCheck = index => {
    const newCheck = [...topicCheck];

    newCheck[index] = !newCheck[index];
    setTopicCheck(newCheck);
  };

  const onNext = () => {
    navigation.navigate('Nav');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>
          <Font text={'관심 주제 설정'} />
        </Text>
        <Text style={styles.subTitle}>
          <Font text={'관심이 가는 주제를 선택해주세요'} />
        </Text>
      </View>
      <View style={styles.topicContainer}>
        <View style={styles.topicItem}>
          <Text style={styles.topicTitle}>
            <Font text={'Dash : 대구 기술창업의 모든 것'} />
          </Text>
          <View style={styles.topicButtonList}>
            <TouchableOpacity
              onPress={() => onCheck(0)}
              style={[styles.topicButton, topicCheck[0] ? styles.checkButton : styles.disabledButton]}>
              <Text style={[styles.topicText, topicCheck[0] ? styles.checkText : styles.topicText]}>
                <Font text={'지원 사업 공고'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck(1)}
              style={[styles.topicButton, topicCheck[1] ? styles.checkButton : styles.disabledButton]}>
              <Text style={[styles.topicText, topicCheck[1] ? styles.checkText : styles.topicText]}>
                <Font text={'입주 공간'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topicItem}>
          <Text style={styles.topicTitle}>
            <Font text={'청년 정책 : 대구 청년들을 위한 정책'} />
          </Text>
          <View style={styles.topicButtonList}>
            <TouchableOpacity
              onPress={() => onCheck(2)}
              style={[styles.topicButton, topicCheck[2] ? styles.checkButton : styles.disabledButton]}>
              <Text style={[styles.topicText, topicCheck[2] ? styles.checkText : styles.topicText]}>
                <Font text={'일자리'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck(3)}
              style={[styles.topicButton, topicCheck[3] ? styles.checkButton : styles.disabledButton]}>
              <Text style={[styles.topicText, topicCheck[3] ? styles.checkText : styles.topicText]}>
                <Font text={'추가'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck(4)}
              style={[styles.topicButton, topicCheck[4] ? styles.checkButton : styles.disabledButton]}>
              <Text style={[styles.topicText, topicCheck[4] ? styles.checkText : styles.topicText]}>
                <Font text={'교육'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck(5)}
              style={[styles.topicButton, topicCheck[5] ? styles.checkButton : styles.disabledButton]}>
              <Text style={[styles.topicText, topicCheck[5] ? styles.checkText : styles.topicText]}>
                <Font text={'복지 문화'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topicItem}>
          <Text style={styles.topicTitle}>
            <Font text={'일자리 포털 : 채용 정보'} />
          </Text>
          <View style={styles.topicButtonList}>
            <TouchableOpacity
              onPress={() => onCheck(6)}
              style={[styles.topicButton, topicCheck[6] ? styles.checkButton : styles.disabledButton]}>
              <Text style={[styles.topicText, topicCheck[6] ? styles.checkText : styles.topicText]}>
                <Font text={'공무원'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck(7)}
              style={[styles.topicButton, topicCheck[7] ? styles.checkButton : styles.disabledButton]}>
              <Text style={[styles.topicText, topicCheck[7] ? styles.checkText : styles.topicText]}>
                <Font text={'공기업'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck(8)}
              style={[styles.topicButton, topicCheck[8] ? styles.checkButton : styles.disabledButton]}>
              <Text style={[styles.topicText, topicCheck[8] ? styles.checkText : styles.topicText]}>
                <Font text={'사기업'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onNext} style={styles.nextButton}>
        <Text style={styles.nextText}>
          <Font text={'다음'} />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 2,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginTop: 15,
    paddingVertical: 20,
  },
  mainTitle: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 16,
  },
  topicContainer: {
    flex: 20,
    padding: 20,
  },
  topicItem: {
    marginVertical: '10%',
  },
  topicTitle: {
    marginBottom: 10,
  },
  topicButton: {
    height: 30,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 20,
  },
  topicButtonList: {
    flex: 1,
    flexDirection: 'row',
  },
  nextButton: {
    flex: 3,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#3F86F8',
  },
  checkButton: {
    backgroundColor: '#3F86F8',
    borderColor: '#3F86F8',
    color: '#fff',
  },
  disabledButton: {
    backgroundColor: '#fff',
    borderColor: '#B6B6B6',
  },
  nextText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default TopicCheck;
